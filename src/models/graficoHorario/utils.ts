import { DiaSemana } from './../diaSemana.model';
import { Sesion } from './../sesion';
import { IActividadesSesion } from './../actividadesSesion.model';
import { ActividadG } from './../actividadG.model';
import { Parametros } from './parametros';
import * as d3 from 'd3';
// import * as d3 from '../../d3/d3/dist/d3.js';
export class Utilidades
{
  static compare(a: ActividadG, b: ActividadG): number {

    const codigosDiasSemana = Parametros.diasSemana.map(ds => ds.codigo);

    if (codigosDiasSemana.indexOf(a.sesion.diaSemana) < codigosDiasSemana.indexOf(b.sesion.diaSemana))      return -1
    else if (codigosDiasSemana.indexOf(a.sesion.diaSemana) > codigosDiasSemana.indexOf(b.sesion.diaSemana)) return 1
    else {

      if (Utilidades.convertirCadenaHoraEnTiempo(a.sesion.horaInicio) < Utilidades.convertirCadenaHoraEnTiempo(b.sesion.horaInicio)) return -1
      else if (Utilidades.convertirCadenaHoraEnTiempo(a.sesion.horaInicio) > Utilidades.convertirCadenaHoraEnTiempo(b.sesion.horaInicio)) return 1
      else if (Utilidades.convertirCadenaHoraEnTiempo(a.sesion.horaInicio) == Utilidades.convertirCadenaHoraEnTiempo(b.sesion.horaInicio)) {

        if (Utilidades.convertirCadenaHoraEnTiempo(a.sesion.horaFin) < Utilidades.convertirCadenaHoraEnTiempo(b.sesion.horaFin)) return -1
        else if (Utilidades.convertirCadenaHoraEnTiempo(a.sesion.horaFin) > Utilidades.convertirCadenaHoraEnTiempo(b.sesion.horaFin)) return 1
        else if (Utilidades.convertirCadenaHoraEnTiempo(a.sesion.horaFin) == Utilidades.convertirCadenaHoraEnTiempo(b.sesion.horaFin)) {
          if (a.sesion.idSesion < b.sesion.idSesion) return -1
          else if (a.sesion.idSesion > b.sesion.idSesion) return 1
          else return 0;
        } else return 0;
      } else return 0;
    }
  } // Fin compare
  static obtenerActividadesSesiones(actividadesG: ActividadG[]): IActividadesSesion[]{

    // Construimos una estructura para agrupar actividades por sesión.
    const actividadesSesion: IActividadesSesion[] = [];

    // tenemos todas las sesiones afectadas de forma única.
    const sesionesConActividad: Sesion[] = [];

    actividadesG.forEach(actg => {

      if (sesionesConActividad.filter(sesion => sesion.idSesion === actg.sesion.idSesion).length===0) {
        sesionesConActividad.push(actg.sesion);
      }
      
    });
    
    
    // [... new Set(actividadesG.map(actg => actg.sesion))];
 

    sesionesConActividad.forEach(ses => {
      const actividadesSesionActual: ActividadG[] = [];
      actividadesG.filter(actg => actg.sesion.idSesion === ses.idSesion).sort(this.compare).forEach(act => actividadesSesionActual.push(act))
      actividadesSesion.push({ sesion: ses, actividades: actividadesSesionActual })
    });

  
  return actividadesSesion;


  }
  static altoPanel(sesion: Sesion) {
    const coordenadaHoraInicio =  Parametros.parametrosGrafico.escalas.escalaVertical(Utilidades.convertirCadenaHoraEnTiempo(sesion.horaInicio));
    const coordenadaHoraFin = Parametros.parametrosGrafico.escalas.escalaVertical(Utilidades.convertirCadenaHoraEnTiempo(sesion.horaFin));
    return coordenadaHoraFin - coordenadaHoraInicio;
  }
  static anyadirDefs(element: any) {
    const defs = element.append('defs');
    const patronFondoPanelHorario = 	defs.append('pattern')
    .attr('id','smallGrid')
    .attr('width',1 )
    .attr('height',1)
      .attr('patternUnits', 'userSpaceOnUse')
      .append('rect')
      .attr('width',10)
      .attr('height', 10)

      var g = defs.append("pattern")
      .attr('id', 'x')
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', '4')
        .attr('height', '4')


      .attr("x", 0).attr("y", 0)
      .append("g").style("fill", "white").style("stroke", "black").style("stroke-width", 0.5);
  g.append("path").attr("d", "M0,0 l25,25");
  g.append("path").attr("d", "M25,0 l-25,25");
  }
  static obtenerHorasInicionHorasFin(actividadesG: ActividadG[]): Date[] {
    return actividadesG.reduce(
      function (colecAnterior: Date[], actividadActual) {
        return colecAnterior.concat([Utilidades.convertirCadenaHoraEnTiempo(actividadActual.sesion.horaInicio), Utilidades.convertirCadenaHoraEnTiempo(actividadActual.sesion.horaFin)]);
     },
     []
     )
  }
  static obtenerDiasSemanaHorario(): DiaSemana[] {

    return Parametros.diasSemana.filter((ds: DiaSemana) => Parametros.parametrosGrafico.parametrosHorario?.diasSemanaHabiles.includes(ds.codigo) );

  }
  static minimoIntervaloTemporal(): Date {
    const horaMinima: Date = Utilidades.convertirCadenaHoraEnTiempo(Parametros.parametrosGrafico.parametrosHorario?.horaMinima);
    return Utilidades.convertirCadenaHoraEnTiempo(Parametros.parametrosGrafico.parametrosHorario?.horaMinima);
  }
  static maximoIntervaloTemporal(): Date {
    const horaMaxima = Utilidades.convertirCadenaHoraEnTiempo(Parametros.parametrosGrafico.parametrosHorario?.horaMaxima);
    return horaMaxima.setMinutes(horaMaxima.getMinutes()) as Date;
  }
  static actividadesCubiertasPor(actividad: ActividadG, actividades: ActividadG[]): ActividadG[] {
    return actividades.filter(
      act =>
        act.idActividad != actividad.idActividad
        && act.sesion.diaSemana === actividad.sesion.diaSemana
        && Utilidades.convertirCadenaHoraEnTiempo(act.sesion.horaInicio) >= Utilidades.convertirCadenaHoraEnTiempo(actividad.sesion.horaInicio)
        && Utilidades.convertirCadenaHoraEnTiempo(act.sesion.horaFin) <= Utilidades.convertirCadenaHoraEnTiempo(actividad.sesion.horaFin)
    )

  }
 static calcularFactorAnchoActividadesG(actsG: ActividadG[], actividades: ActividadG[]) {

  actsG.forEach(
    actG => {
      const actividadesCubiertas = Utilidades.actividadesCubiertasPor(actG, actividades);
      if (actividadesCubiertas.length > 0 && actG) {
        actG.nivelAncho = d3.max(actividadesCubiertas.map(act => act.nivelAncho)) as number + 1;
      }
    });

  }

  static calcularColoresActividadesG(actsG: ActividadG[]) {

    const tiposActividad: string[] = [];


    // Localizamos todos los diferentes tipos de tipos de actividad y los registramos en TiposActividad.
    actsG.forEach(
      actG => {
        if (!tiposActividad.some(idTipoActividad => idTipoActividad === actG.tipoActividad?.idTipoActividad))
        { tiposActividad.push(actG.tipoActividad?.idTipoActividad) }

      });

    for (let index = 0; index < tiposActividad.length; index++) {
      const tipoActividadActual = tiposActividad[index];

      actsG.filter(actG => actG.tipoActividad?.idTipoActividad === tipoActividadActual).forEach(
        actG => actG.color = Parametros.parametrosGrafico.actividades.colores[index]
      );


    }

}


  marcarActividadesComoSeleccionadas(identificadoresActividades: string[]) {
    identificadoresActividades.forEach(
      iact => {
        const x = d3.select('g#panelActividad_' + iact)

        const y: any = x.select('.rectActividad');

        x.append('rect')
          .attr('width', y.attr('width'))
          .attr('height', y.attr('height'))
          .attr('class', 'rectActividadSeleccionada').attr('fill', 'url(#x)')

      }
    )

  }
  static desmarcarActividadesComoSeleccionadas(actividades: ActividadG[], identificadoresActividades?: string[], ) {

    if (!identificadoresActividades) {
      d3.selectAll('g.panelActividad').select('.rectActividadSeleccionada').remove()
    } else
    {
      actividades
        .filter(actG => identificadoresActividades.includes(actG.idActividad))
        .forEach(actG => d3.select('g#panelActividad' + actG.idActividad).select('.rectActividadSeleccionada').remove()
        )
    }
  }
  static marcarActividadesComoSeleccionadas(identificadoresActividades: string[]) {
    identificadoresActividades.forEach(
      iact => {
        const x = d3.select('g#panelActividad_' + iact).select('.panelActividadZonaSeleccion')

        const y: any = x.select('.rectActividad');

        x.append('rect')
          .attr('width', y.attr('width'))
          .attr('height', y.attr('height'))
          .attr('class', 'rectActividadSeleccionada').attr('fill', 'url(#x)')

      }
    )

  }
  static convertirCadenaHoraEnTiempo: any = d3.timeParse("%I:%M");
  static convertirTiempoEnCadenaHora: any = d3.timeFormat("%I:%M");


}

import { parametrosGrafico } from './../parametrosGrafico.model';
import { DiaSemana } from './../diaSemana.model';


export class Parametros {
  static diasSemana: DiaSemana[] = [
    { codigo: 'L', denominacionCorta: 'LUN', denominacionLarga: 'Lunes' },
    { codigo: 'M', denominacionCorta: 'MAR', denominacionLarga: 'Martes' },
    { codigo: 'X', denominacionCorta: 'MIE', denominacionLarga: 'Miércoles' },
    { codigo: 'J', denominacionCorta: 'JUE', denominacionLarga: 'Jueves' },
    { codigo: 'V', denominacionCorta: 'VIE', denominacionLarga: 'Viernes' },
    { codigo: 'S', denominacionCorta: 'SAB', denominacionLarga: 'Sábado' },
    { codigo: 'D', denominacionCorta: 'DOM', denominacionLarga: 'Domingo' },
  ];
  static parametrosGrafico: parametrosGrafico = {

    parametrosHorario: undefined,

    // Parámetros generales
    grafico: {
      anchoGrafico: undefined,
      altoGrafico: undefined,
      colorGrafico: 'white',
      margenGrafico: {
        margenInferiorGrafico:     3,
        margenDerechoGrafico:      3,
        margenSuperiorGrafico:     5,
        margenIzquierdoGrafico:    5,
      },
    },

    panelHorario: {
      altoPanelHorario:     undefined,
      colorPanelHorario:    '#fff',
      anchoPanelHorario:    undefined
    },

    panelDiaSemana: {
      colorPanelDiaSemana: '#111111',
    },

    panelSesiones: {

      margenLateral: 0,
      altoCabecera: 11,
      anchoSesion: undefined,
      colorCabecera:'#e1e1e1',
      colorCuerpo:'#aaaaaa'

    },

    escalas: {
      escalaVertical: undefined,
      escalaHorizontal: undefined
    },

    actividades: {
      tamanyoTexto: '12',
      porcentajeZonaSeleccionActividad: 6,
      colores: ['#bde8ef','#ffd4e5','#feffa2','#e0cdff','#fdfd96']
    }

  }




}

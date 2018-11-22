'use strict'
import { createMuiTheme } from '@material-ui/core/styles'

let styles = {
  fontFamily: 'Lora, Open Sans, Roboto',

  palette: {
    background: {
      default: '#fff'
    },
    bluePrimary: '#2196F3',
    blueSecondary: '#1976D2',
    blueLight: '#e1f1ff',
    blueGrayMedium: '#37474F',
    blueGrayDark: '#37474F',
    blueGrayLight: '#90A4AE',
    grayVeryLight: '#F0F0F0',
    grayLight: '#ECEFF1',
    grayMedium: '#757575',
    grayDark: '#383838',
    grayVeryDark: '#212121',
    black: '#000000',
    redPrimary: '#FF5252',
    greenPrimary: '#00E676',
    greenSecondary: '#4CAF50',
    white: '#FFFFFF',
    gold: '#FFC107'
  },

  overrides: {
    MuiCardHeader: {
      title: {
        fontSize: 16,
        fontWeight: 500
      }
    },
    MuiTypography: {
      colorPrimary: {
        color: 'blueGrayDark'
      },
      colorSecondary: {
        color: 'white'
      },
      colorTextPrimary: {
        color: '#2196F3'
      },
      colorTextSecondary: {
        color: 'white'
      },
      display1: {
        fontFamily: 'Lora',
        fontSize: '2.5em',
        fontWeight: 700,
        lineHeight: 1.25,
        letterSpacing: 3,
        color: 'rgba(55, 71, 79, 1)'
      },
      display2: {
        fontFamily: 'Lora',
        fontSize: '2.25em',
        fontWeight: 700,
        letterSpacing: 0.75,
        lineHeight: 1.25,
        color: 'rgba(55, 71, 79, 1)'
      },
      display3: {
        fontFamily: 'Open Sans',
        fontSize: '2.25em',
        fontWeight: 500,
        lineHeight: 1.25,
        color: 'rgba(55, 71, 79, 1)'
      },
      display4: {
        fontFamily: 'Open Sans',
        fontSize: '1.375em',
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: 0.75,
        color: 'rgba(55, 71, 79, 1)'
      },
      body1: {
        fontFamily: 'Open Sans',
        fontSize: '1em',
        lineHeight: '23px',
        letterSpacing: 1,
        color: 'rgba(55, 71, 79, 1)'
      },
      body2: {
        fontFamily: 'Open Sans',
        fontSize: '0.875em',
        color: 'rgba(55, 71, 79, 1)'
      },
      caption: {
        fontFamily: 'Open Sans',
        fontSize: '0.750em',
        color: 'rgba(55, 71, 79, 1)'
      },
      subheading: {
        fontFamily: 'Open Sans',
        color: 'rgba(55, 71, 79, 1)'
      }
    },
    MuiButton: {
      root: {
        fontFamily: 'Open Sans',
        fontWeight: 700,
        borderRadius: 2
      },
      textPrimary: {
        color: 'white'
      },
      outlinedPrimary: {
        transition: 'none',
        border: '1px solid #FFFFFF',
        backgroundColor: 'transparent',
        '&:hover': {
          borderColor: '#777',
          width: '100%',
          borderRadius: 20
        }
      },
      outlinedSecondary: {
        transition: 'none',
        border: '1px solid #FFFFFF',
        backgroundColor: 'transparent',
        '&:hover': {
          borderColor: '#777'
        },
        color: '#FFFFFF',
        width: '100%',
        borderRadius: 20
      },
      containedPrimary: {
        backgroundColor: '#2196F3',
        '&:hover': {
          backgroundColor: '#1976D2'
        },
        width: '100%',
        borderRadius: 20
      },
      containedSecondary: {
        backgroundColor: '#FF5252',
        color: 'white'
      }
    },
    MuiSvgIcon: {
      colorPrimary: {
        fill: 'black'
      },
      colorSecondary: {
        fill: 'white'
      }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#2196F3'
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: '#2196F3',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#2196F3',
      },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: '#2196F3'
      },
      thumb: {
       border: '14px solid #2196F3'
      }
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: '#2196F3'
      }
    }
  }
}

export const theme = createMuiTheme(styles)

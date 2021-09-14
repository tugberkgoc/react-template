import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: '2px',
    fontWeight: 400,
    textAlign: 'center',
    '&:hover': {
      color: 'red'
    },
    margin: '10px'
  }
}))

const data = [
  {
    id: 1,
    name: 'Felipe Badillo'
  },
  {
    id: 2,
    name: 'Clara Espinoza'
  },
  {
    id: 3,
    name: 'Federico Puga'
  },
  {
    id: 4,
    name: 'Eloisa Torres'
  },
  {
    id: 5,
    name: 'José Zayas'
  },
  {
    id: 6,
    name: 'Carla Valles'
  },
  {
    id: 7,
    name: 'Mariana Nieves'
  },
  {
    id: 8,
    name: 'Daniel Laboy'
  },
  {
    id: 9,
    name: 'Adán Casanova'
  },
  {
    id: 10,
    name: 'Jorge Villagómez'
  },
  {
    id: 11,
    name: 'Sonia Araña'
  },
  {
    id: 12,
    name: 'Sonia Cervantes'
  },
  {
    id: 13,
    name: 'Luis Miguel Zambrano'
  },
  {
    id: 14,
    name: 'Virginia Collado'
  },
  {
    id: 15,
    name: 'Óscar Arguello'
  },
  {
    id: 16,
    name: 'Daniela Alba'
  },
  {
    id: 17,
    name: 'María José Loya'
  },
  {
    id: 18,
    name: 'Alfredo Serrano'
  },
  {
    id: 19,
    name: 'Alberto Enríquez'
  },
  {
    id: 20,
    name: 'Ángela Velásquez'
  },
  {
    id: 21,
    name: 'José Emilio Alba'
  },
  {
    id: 22,
    name: 'María José Valentín'
  },
  {
    id: 23,
    name: 'Berta de Anda'
  },
  {
    id: 24,
    name: 'Dolores Méndez'
  },
  {
    id: 25,
    name: 'Gustavo Montalvo'
  },
  {
    id: 26,
    name: 'Leticia de Jesús'
  },
  {
    id: 27,
    name: 'Jacobo Briones'
  },
  {
    id: 28,
    name: 'Antonio Cotto'
  },
  {
    id: 29,
    name: 'María Soledad Cisneros'
  },
  {
    id: 30,
    name: 'Alfredo Rivas'
  },
  {
    id: 31,
    name: 'Benjamín Pedraza'
  },
  {
    id: 32,
    name: 'Teresa Santacruz'
  },
  {
    id: 33,
    name: 'Rosalia Flores'
  },
  {
    id: 34,
    name: 'Marilu Mesa'
  },
  {
    id: 35,
    name: 'Amalia Piña'
  },
  {
    id: 36,
    name: 'Lucas Villalpando'
  },
  {
    id: 37,
    name: 'Susana Hurtado'
  },
  {
    id: 38,
    name: 'Yolanda Nájera'
  },
  {
    id: 39,
    name: 'Marta Ozuna'
  },
  {
    id: 40,
    name: 'Emilia Henríquez'
  },
  {
    id: 41,
    name: 'Agustín Cervantes'
  },
  {
    id: 42,
    name: 'Mariano Verduzco'
  },
  {
    id: 43,
    name: 'Julia Rosado'
  },
  {
    id: 44,
    name: 'Sofia Adorno'
  },
  {
    id: 45,
    name: 'José Regalado'
  },
  {
    id: 46,
    name: 'Mateo Irizarry'
  },
  {
    id: 47,
    name: 'Graciela Rosado'
  },
  {
    id: 48,
    name: 'Eloisa Velasco'
  },
  {
    id: 49,
    name: 'Adán Atencio'
  },
  {
    id: 50,
    name: 'Graciela Pineda'
  },
  {
    id: 51,
    name: 'Cecilia Brito'
  },
  {
    id: 52,
    name: 'Mayte Corona'
  },
  {
    id: 53,
    name: 'Virginia Arellano'
  },
  {
    id: 54,
    name: 'Beatriz Noriega'
  },
  {
    id: 55,
    name: 'Verónica Osorio'
  },
  {
    id: 56,
    name: 'Martín Serrato'
  },
  {
    id: 57,
    name: 'Emilio Méndez'
  },
  {
    id: 58,
    name: 'Andrea Rincón'
  },
  {
    id: 59,
    name: 'María Eugenia Mesa'
  },
  {
    id: 60,
    name: 'Guadalupe Mateo'
  }
]

export default function CrmSearchResult (props) {
  const classes = useStyles()

  return (
    <Container>
      <Box mt={10} mb={10}>
        <Grid container>
          {data.map(item => {
            return (
              <Grid item xs={2}>
                <div className={classes.listItem}>{item.name}</div>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  )
}

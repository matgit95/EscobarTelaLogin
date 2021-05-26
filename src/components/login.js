import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login=()=>{
    const paperStyle={padding :30,height:'50vh',width:270,margin:"30px auto"}
    const avatarstyle={backgroundColor:'black'} 
    const btnstyle={margin:'8px 0'}
    return(
        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                 <Avatar style={avatarstyle}><LockOpenIcon/></Avatar>
                  <h2>Realizar Acesso</h2>
                </Grid>
                <TextField label= 'Usuário' placeholder='Inserir Usuário'  fullWidth required />
                <TextField label= 'Senha' placeholder='Inserir Senha'  type='senha' fullWidth required />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
          />
        }
        label="Lembrar me"
          />

          <Button type='submit' color='default' variant="contained" style={btnstyle} fullWidth>
             Logar
              </Button>
            </Paper>
        </Grid>
    )
}

export default Login



<template>
<v-app>
  <Navbar/>
  <v-content>
    <v-layout wrap row mt-2 align-center justify-center>
    <v-card width="600px" height= "650px">
    <v-flex xs12 md10 ml-3>  
    <v-form ref="form" v-model="valid" lazy-validation> 
   <h1>Evaluation Reports</h1>
   <v-checkbox color="black" v-model="checkbox1" :rules="[v => !!v || 'required']" label="Respondent Demographic (F.)" required></v-checkbox>
   <v-checkbox color="black" v-model="checkbox2" :rules="[v => !!v || 'required']" label="Assessment of Event (G.)" required></v-checkbox>
   <v-checkbox color="black" v-model="checkbox3" :rules="[v => !!v || 'required']" label="SAAF" required></v-checkbox>
   <v-checkbox color="black" v-model="checkbox4" :rules="[v => !!v || 'required']" label="Evaluation Forms (Answered)" required></v-checkbox>
  <v-checkbox color="black" v-model="checkbox5" :rules="[v => !!v || 'required']" label="Liquidation Report" required></v-checkbox>
  <v-checkbox color="black" v-model="checkbox6" :rules="[v => !!v || 'required']" label="Short Write-up" required></v-checkbox>
  <v-checkbox color="black" v-model="checkbox7" :rules="[v => !!v || 'required']" label="Pictures of Event with Description" required></v-checkbox>
    

   <form>
      <v-layout>
       <v-flex xs12 sm8>
          <v-text-field v-model="remarks" label="Remarks:" outline></v-text-field>
        </v-flex>
</v-layout>
    </form>
    <v-btn flat @click="snackbar=true" class="green mt-1" color="white" :disabled="!valid">ENDORSE</v-btn>
    <v-btn flat @click="snackbar2=true" class="red mt-1" color="white">FOR COMPLETION</v-btn>
<v-btn flat @click="back" class="primary mr-3 mt-1" to="/studentpartireport_socc" >BACK</v-btn>



<v-snackbar
      v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
      :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'" color="green"> Post-event report endorsed.
      <v-btn dark flat @click="snackbar = false">
        Close</v-btn>
    </v-snackbar>

    <v-snackbar v-model="snackbar2" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'"
      :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'" color="red">
      Post-event report denied.
      <v-btn dark flat @click="snackbar2 = false">
        Close</v-btn>
    </v-snackbar>
   </v-form>
   </v-flex>
    </v-card>
    </v-layout>
  </v-content>
 
</v-app>
</template>

<script>
import Navbar from '@/components/navbar_socc'

export default{
  name: 'Navbar_SOCC',
  components: { Navbar },
  data: () => ({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    valid: true,
    snackbar: false,
    snackbar2: false,
    y: 'top',
        x: null,
        mode: '',
        timeout: 3000,
    
  }),
  }


</script>
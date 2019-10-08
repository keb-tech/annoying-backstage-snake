<template>
<v-app>
  <Navbar/>
  <v-content>
    <v-layout wrap row mt-4 align-center justify-center>
    <v-card class="my-auto" width="600px">
    <v-flex xs12 md111 ml-3>  
    <v-form ref="form" v-model="form" >
    <h1>Evaluation Reports</h1>
     <v-checkbox class="ma-0" v-model="checkbox1" :rules="[rules.required]" color="green darken-1" label="Respondent Demographic (F.)"></v-checkbox>
    <v-checkbox class="ma-0" v-model="checkbox2" :rules="[rules.required]" color="green darken-1"  label="Assessment of Event (G.)"></v-checkbox>
    <v-checkbox class="ma-0" v-model="checkbox3" :rules="[rules.required]" color="green darken-1" label="SAAF" ></v-checkbox>
    <v-checkbox class="ma-0" v-model="checkbox4" :rules="[rules.required]" color="green darken-1" label="Evaluation Forms (Answered)"></v-checkbox>
    <v-checkbox class="ma-0" v-model="checkbox5" :rules="[rules.required]" color="green darken-1"   label="Liquidation Report"></v-checkbox>
    <v-checkbox class="ma-0" v-model="checkbox6" :rules="[rules.required]" color="green darken-1"   label="Short Write-up"></v-checkbox>
    <v-checkbox class="ma-0" v-model="checkbox7" :rules="[rules.required]" color="green darken-1"   label="Pictures of Event with Description"></v-checkbox>
</v-form>

   <form>
      <v-layout>
       <v-flex xs12 sm11>
          <div>
          <v-text-field v-model="remarks" label="Remarks:" outline></v-text-field>
           </div>
        </v-flex>
        </v-layout>
    </form>
     <v-card-actions>
    <v-btn flat @click="snackbar2=true" class="red" color="white">FOR COMPLETION</v-btn>
   <v-spacer></v-spacer>
    <v-btn flat @click="back" class="yellow darken-3 white--text mr-3" to="/studentpartireport_socc" >BACK</v-btn>
    <div class="flex-grow-1"></div>
    <v-btn flat @click="snackbar=true" class="green" color="white" :disabled="!form">ENDORSE</v-btn>
     </v-card-actions>
 

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
    form: false,
    snackbar: false,
    snackbar2: false,
    y: 'top',
        x: null,
        mode: '',
        timeout: 3000,
        rules: {
      required: v => !!v || 'This field is required',
    },
    
  }),
  }


</script>
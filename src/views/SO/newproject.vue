<template>
  <v-app>

    <v-layout wrap row mt-4 align-center justify-center>
      <v-card class="my-auto pa-4">
        <v-card-title class="display-1 font-weight-medium ml-0">Post-Event Form:</v-card-title>
        
        <v-form ref="form" :lazy-validation="lazy" v-model="valid">
          <v-layout>
            <v-flex md3>
              <v-text-field v-model="postevals.ereserve" :rules="ereserverules" prepend-icon="info" label="eReserve#" required></v-text-field>
            </v-flex>
            <v-flex md5>
              <v-text-field v-model="postevals.event" prepend-icon="event" label="Event Name" :rules="inputRules" required></v-text-field>
            </v-flex>
            <v-flex md4>
              <v-menu   ref="menu"  v-model="menu" :close-on-content-click="false"  :nudge-right="40"
                lazy transition="scale-transition"   offset-y
                full-width min-width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="postevals.date"   label="Start of event date" hint="YYYY-MM-DD format" persistent-hint                   prepend-icon="event" v-on="on"  :rules="inputRules" required ></v-text-field>
                </template>
                <v-date-picker v-model="postevals.date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(postevals.date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex md5>
              <v-text-field :mask="postevals.year" prepend-icon="school" :rules="inputRules" label="Academic Year" required hint="ex. 2019-2020" persistent-hint>       </v-text-field>
            </v-flex>
            <v-flex md4 d-flex>
              <v-select
                v-model="sem"
                :items="items"
                :rules="inputRules"
                prepend-icon="menu_book"
                item-text="sem"
                label="Semester"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md12>
              <v-textarea
                auto-grow
                :rules="inputRules"
                v-model="postevals.edescript"
                prepend-icon="description"
                rows="1"
                label="Event Description"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex md3>
              <v-text-field
                v-model="postevals.speaker"
                prepend-icon="perm_identity"
                label="Speaker Name"
                required
                :rules="inputRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md12>
              <v-textarea
                auto-grow
                label="Speaker Affiliation/s"
                prepend-icon="description"
                :rules="inputRules"
                rows="1"
                v-model="postevals.speakerAff"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>
            
          <v-card-actions>
            <v-btn flat @click="cancel" class="red white--text" to="/dashboard" >Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="save" class="warning mr-3" to="/dashboard">Save to Drafts</v-btn>
            <div class="flex-grow-1"></div>
            <v-btn flat @click="validate" :disabled="!valid" to="/org/studparti" class="success" >Next</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-app>
</template>
  <script>


export default {
  name: "form_SO",
  components: {  },
 
  data() {
    return {  
      postevals:{
      ereserve:"",
      event: "",
      edescript: "",
      year: "####-####",
      sem:"",
      speaker:"",
      speakerAff:"",
      date: new Date().toISOString().substr(0, 10),
      },
      menu: false,
      
      lazy:false,
      inputRules: [v => !!v || 'This field is required'],
      ereserverules: [v => !!v || 'This field is required',
        v => /^\d+$/.test(v)||'This field only accept numbers'],
     
      items: [{ sem: "1st Semester" }, { sem: "2nd Semester" }],
    }
  },
  methods: {
     validate () {
      if (this.$refs.form.validate()) {
        this.valid = true
      }
  }
}
}
</script>


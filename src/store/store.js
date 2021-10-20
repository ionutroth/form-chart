import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        list: [{
            firstName: "Roth", 
            lastName: "Ion", 
            email: "rothionut@mail.com", 
            grade1: 1, 
            grade2: 1, 
            grade3: 1, 
            grade7: 1, 
            grade4: 1, 
            grade5: 1, 
            grade6: 1
        }],
        listTable: [{
            firstName: "Roth", 
            lastName: "Ion", 
            email: "rothionut@mail.com", 
        }]
    },
    mutations: {
        addToList(state, payload){
            state.list.push({
                firstName: payload.fn,
                lastName: payload.ln,
                email: payload.em,
                grade1: payload.gr1,
                grade2: payload.gr2,
                grade3: payload.gr3,
                grade4: payload.gr4,
                grade5: payload.gr5,
                grade6: payload.gr6,
                grade7: payload.gr7,
            })
            state.listTable.push({
                firstName: payload.fn,
                lastName: payload.ln,
                email: payload.em,
            })
        }
    }
})
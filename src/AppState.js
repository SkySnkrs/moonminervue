import { reactive } from 'vue'
import { Upgrades } from './models/Upgrades.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  bread : 0,
  Upgrades : [
    // id, name, cost
    new Upgrades({ id: 1, name: 'Bread Slica', cost: 10, auto: false }),
    new Upgrades({ id: 2, name: 'BREAD AND BUTTER', cost: 100, auto: false }),
    new Upgrades({ id: 3, name: 'Auto Bread Slica', cost: 1000, auto: true }),
    new Upgrades({ id: 4, name: 'The Auto Bread Go Getta 1000', cost: 5000, auto: true })
  ],
  click: 1,
  autoClick : 0
})


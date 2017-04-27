class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false,
    warpDrive = 'disengaged', docked, phasersCharge = 'uncharged') {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.crew.length > 0 ? this.docked = false : this.docked = true
    this.phasersCharge = phasersCharge
    this.setShipToCrew(this) // research
  }

  setShipToCrew(ship){
    this.crew.forEach(function(member){ // research
      member.currentShip = ship
    })
  }
}

// A space ship will be inactive if it is created without a crew.
// To have these two object types be aware of one another we need to have the ship become aware of it's crew members when it's created.
// This will also require you to make sure a crew member becomes aware of their ship when they are added to it.

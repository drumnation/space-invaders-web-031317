class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig') {
    this.position = position;
    this.currentShip = currentShip
  } // instances that are by default unable to interact with one another.

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Gunner') {
      return 'had no effect'
    } else if (this.position === 'Gunner') {
      this.currentShip.phasersCharge = 'charged!'
    }
  } // - Crew members will also be unable to use their special abilities if they're not assigned to a ship.
    // - Crew members also should be unable to perform certain actions that their positions are incapable of doing.


  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Pilot') {
      return 'had no effect'
    } else if (this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged!'
    }
  } // - Crew members will also be unable to use their special abilities if they're not assigned to a ship.
    // - Crew members also should be unable to perform certain actions that their positions are incapable of doing.


  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Defender') {
      return 'had no effect'
    } else if (this.position === 'Defender') {
      this.currentShip.cloaked = true
    }
  } // - Crew members will also be unable to use their special abilities if they're not assigned to a ship.
    // - Crew members also should be unable to perform certain actions that their positions are incapable of doing.
}

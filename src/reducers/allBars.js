const allBars = (
  state = [
    {
      name: 'Three Lions',
      numTitle: 12,
      barNum: 1,
      barSubtitle: 'Drummers Drumming',
      special: '$2.50 (16oz) or $4.00 (20oz) Coors Lights - $4 (16oz) Carlsburg - $1 off Drafts & Wells',
      challenge: 'Coors Light or Carlsburb (16oz)',
      time: '3:00PM - 4:00PM',
      googleName: 'three+lions',
      checkedIn: false,
      address: '2239 E Colfax',
      fact: 'June 13th is National Albinism Awareness Day',
      image: 'ThreeLionsImg'
    },
    {
      name: "Pete's Satire Lounge",
      numTitle: 11,
      barNum: 2,
      barSubtitle: 'Pipers Piping',
      special: '$2 Domestic Draft - $3 or $4 Bottles (Pending Beer Choice)',
      challenge: 'Domestic Draft or Bottle',
      time: '4:00PM - 4:30PM',
      googleName: 'petes+satire+lounge',
      checkedIn: false,
      address: '1920 E Colfax',
      fact: 'Albinism is an inherited genetic condition',
      image: 'PetesSatireLoungeImg'
    },
    {
      name: 'Squire Lounge',
      numTitle: 10,
      barNum: 3,
      barSubtitle: 'Lords a Leaping',
      special: '$2 Domestics - $2 Mystery Shot -$3 Wells',
      challenge: 'Drink two domestic beers or well drinks',
      time: '4:30PM - 5:30PM',
      googleName: 'squire+lounge',
      checkedIn: false,
      address: '1800 E Colfax',
      fact: 'Albinism causes people to have little to no pigment in their skin, hair, & eyes',
      image: 'SquireLoungeImg'
    },
    {
      name: 'London Pub',
      numTitle: 9,
      barNum: 4,
      barSubtitle: 'Ladies Dancing',
      special: 'Select $3 taps & $4 Exotico or Milagro Tequilla',
      challenge: 'Pizza & Beer',
      time: '5:30PM - 6:15PM',
      googleName: 'london+pub',
      checkedIn: false,
      address: '1501 E Colfax',
      fact: 'People with Albinism typically have low vision',
      image: 'LondonPubImg'
    },
    {
      name: 'Irish Snug',
      numTitle: 8,
      barNum: 5,
      barSubtitle: 'Maids a Milking',
      special: '$3 Irish Car Bomb',
      challenge: 'Irish Car Bombs',
      time: '6:15PM - 7:00PM',
      googleName: 'irish+snug',
      checkedIn: false,
      address: '1201 E Colfax',
      fact: 'Albinism does not affect intellectual capabilities',
      image: 'IrishSnugImg'
    },
    {
      name: "Kinga's Lounge",
      numTitle: 7,
      barNum: 6,
      barSubtitle: 'Swans a Swimming',
      special: '$5 Beer & Shot (Domestic  Bottle & Infused Vodka or Fireball)',
      challenge: 'Sing Christmas Carol with Bar Crawl',
      time: '7:00PM - 7:45PM',
      googleName: 'kingas+lounge',
      checkedIn: false,
      address: '1509 N Marion St',
      fact: '1 in 100 people carry the Albinism gene',
      image: 'KingasLoungeImg'
    },
    {
      name: "Tooey's",
      numTitle: 6,
      barNum: 7,
      barSubtitle: 'Geese a Laying',
      special: '$1 Mini Coors Light - $5 Happy Meal - $ 4 Shot Black Beam & Spiced Rum',
      challenge: 'Drink 2 Mini Coors Lights or Regular Coors Lights',
      time: '7:45PM - 8:30PM',
      googleName: 'tooeys',
      checkedIn: false,
      address: '1521 N Marion St',
      fact: '1 in 20,000 are born with Albinism',
      image: 'TooeysImg'
    },
    {
      name: "Sanchos",
      numTitle: 5,
      barNum: 8,
      barSubtitle: 'Golden Rings',
      special: '$2 PBR',
      challenge: 'Drink a PBR',
      time: '8:30PM - 9:15PM',
      googleName: 'sanchos',
      checkedIn: false,
      address: '741 E Colfax',
      fact: 'Albinism is most common in African Americans, Japanese, & Caucasians',
      image: 'SanchosImg'
    },
    {
      name: "1 UP",
      numTitle: 4,
      barNum: 9,
      barSubtitle: 'Calling Birds',
      special: '$3 Mystery Shot $3 PBR & Coors Light - $3 Pickle Shot',
      challenge: '	$2 Mystery Shot',
      time: '9:15PM - 10:00PM',
      googleName: '1+up',
      checkedIn: false,
      address: '717 E Colfax',
      fact: 'une 13th is National Albinism Awareness Day',
      image: 'OneUpImg'
    },
    {
      name: "Prohibition",
      numTitle: 3,
      barNum: 10,
      barSubtitle: 'French Hens',
      special: '$7 Montucky & Jamison Shot',
      challenge: 'Drink a beer and water',
      time: '10:00PM - 10:45PM',
      googleName: 'prohibition',
      checkedIn: false,
      address: '504 E Colfax',
      fact: 'Albinism is an inherited genetic condition',
      image: 'ProhibitionImg'
    },
    {
      name: "Nob Hill Inn",
      numTitle: 2,
      barNum: 11,
      barSubtitle: 'Turtle Doves',
      special: '$3 Coors Light - $3 Well Drinks - $4 Fireball - $6 PB&J',
      challenge: 'PB&J Special',
      time: '10:45PM - 11:30PM',
      googleName: 'nob+hill+inn',
      checkedIn: false,
      address: '420 E Colfax',
      fact: 'Albinism causes people to have little to no pigment in their skin, hair, & eyes',
      image: 'NobHillImg'
    },
    {
      name: "Satellite Bar",
      numTitle: 1,
      barNum: 12,
      barSubtitle: 'And a Partridge in a Pear Tree',
      special: 'DOES IT MATTER?',
      challenge: 'Celebrate with a can of beer',
      time: '11:30PM - Bar Close',
      googleName: 'satellite+bar',
      checkedIn: false,
      address: '308 E Colfax',
      fact: 'People with Albinism typically have low vision',
      image: 'SatelliteBarImg'
    }
  ],
  action
) => {
  switch (action.type) {
    case 'ADD_ALL_BARS':
      return [...action.bars]
    case 'CHECKIN_BAR':
      const updatedBars = state.map(bar => {
        let updatedBar
        bar.barNum === action.barNum ? (updatedBar = { ...bar, checkedIn: true }) : (updatedBar = bar)

        return updatedBar
      })

      return updatedBars
    default:
      return state
  }
}

export default allBars

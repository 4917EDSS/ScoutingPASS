var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scout Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
	{ "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999,
	  "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Alliance",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red<br>",
        "b1": "Blue"
      },
      "required":"true"
    }
  ],
  "auton": [
    { "name": "Auto Start Position",
      "code": "asp",
      "type": "radio",
      "choices": {
        "m": "Middle Auto<br>",
        "s": "Side Auto"
      },
	  "required": "true"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Processor",
      "code": "aps",
      "type": "counter"
    },
    { "name": "Net",
      "code": "ans",
      "type": "counter"
    },
	{ "name": "A-Stop Pressed",
      "code": "ax",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Coral L4",
      "code": "tc4",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Coral L1",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Processor",
      "code": "tps",
      "type": "counter"
    },
    { "name": "Net",
      "code": "tns",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
	  "required": "true"
    }
  ],
  "endgame": [
    { "name": "Final Robot Position",
      "code": "efs",
      "type":"radio",
      "choices": {
        "p": "Parked (no attempt)<br>",
        "pf": "Parked (failed climb)<br>",
        "sc": "Shallow Cage<br>",
        "dc": "Deep Cage<br>",
        "x": "Not at Barge"
      },
	  "required": "true"
    }
  ],
  "postmatch": [
    { "name": "E-Stop Pressed",
      "code": "xes",
      "type": "bool"
    },
    { "name": "Lost Comms / Stopped Moving",
      "code": "xlc",
      "type": "bool"
    },
    { "name": "Tipped",
      "code": "xt",
      "type": "bool"
    },
    { "name": "Broken Parts",
      "code": "xbp",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;

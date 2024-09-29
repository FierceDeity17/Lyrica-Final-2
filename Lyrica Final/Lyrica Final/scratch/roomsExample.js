rooms = []
rooms[0] = {
    description: "",
    items: [],
    boss: null,
    helpMessage: "",
    blockedPathMessage: "",
    image: "",
    trap: function(hasTorch){
        if(hasTorch){
            message = "you slip by the trap"
        } else {
            message = "you die"
        }
    }
}

roomNames = []
roomNames[0] = "Forest"
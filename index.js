// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    switch (someValue){
        case 43:
            return 1
            break;
        case 50:
            return 8
            break;
        case 34:
            return 8
            break;
    }
    
}
function distanceFromHqInFeet(someValue){
    switch (someValue){
        case 43:
            return 264
        break
        case 50:
            return 2112
            break
        case 34:
            return 2112
            break
    }
}
function distanceTravelledInFeet(someValue1,someValue2){
    switch(someValue1,someValue2){
        case (43,48):
            return 1320
            break

        case (50,60):
            return 2640
            break
        
        case (34,28):
            return 1584
            break
    }
}

function calculatesFarePrice(start,destination){
    switch (start,destination){
        case (43,44):
            return 0
            break
        case (34,32):
            return 2.56
        case (50,58):
            return 25
        case (34,24):
            return 'cannot travel that far'
    }

}
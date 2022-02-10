export let Monday:activities[] = [
    {
        when: "morning",
        activity: "Yoga",
        place: "poolen",
        time: 12
    },
    
    {
        when: "afternoon",
        activity: "Fågelskådning",
        place: "lobbyn",
        time: 15
    },
    

]

export let Tuesday:activities[] = [
    {
        when: "morning",
        activity: "Vattengympa",
        place: "poolen",
        time: 11
    },
    
    {
        when: "afternoon",
        activity: "Träning",
        place: "gymmet",
        time: 16
    },
    

]

export let Wednesday:activities[] = [
    {
        when: "morning",
        activity: "Yoga",
        place: "savannen",
        time: 12
    },
    
    {
        when: "afternoon",
        activity: "Kareoke",
        place: "gymmet",
        time: 17
    },
    

]

export let Thursday:activities[] = [
    {
        when: "morning",
        activity: "Yoga",
        place: "poolen",
        time: 12
    },
    
    {
        when: "afternoon",
        activity: "Happy Hour",
        place: "baren",
        time: 16
    },
    

]

export let Friday:activities[] = [
    {
        when: "morning",
        activity: "Yoga",
        place: "poolen",
        time: 12
    },
    
    {
        when: "afternoon",
        activity: "Happy Hour",
        place: "baren",
        time: 16
    },
    

]

export let Saturday:activities[] = [
    {
        when: "morning",
        activity: "Yoga",
        place: "gymmet",
        time: 11
    },
    
    {
        when: "afternoon",
        activity: "Fågelskådning",
        place: "lobbyn",
        time: 15
    },
    

]

export let Sunday:activities[] = [
    {
        when: "morning",
        activity: "Meditation",
        place: "savannen",
        time: 12
    },
    
    {
        when: "afternoon",
        activity: "Fågelskådning",
        place: "lobbyn",
        time: 15
    },
    

]



export interface activities {
        when:string;
        activity:string;
        place:string
        time:number
  }
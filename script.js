
        // forof loop use to print value of array without initial and condition in loop
        // forof loop mostly use in array
        // forof loop doesn't work in object 
        // forof loop work in map()
        // use key and value to print data

        const arr=["raza","md","tabish","alam"]
        for (const i of arr) {
            console.log(i);
        }

        const greeting = "hello world!"
        for (const start of greeting) {
            // console.log(`each char is ${start}`);
        }

        const score=[2,3,4,5]
        for (const num of score) {
            // console.log(num);
        }



        const map = new Map()
        map.set('in',"india")
        map.set('fr',"france")
        map.set('usa',"uniter state of americe")
        map.set('ch',"china")

        // console.log(map);
        
        for (const [key,value] of map) {
            console.log(key+":-"+value);
        }


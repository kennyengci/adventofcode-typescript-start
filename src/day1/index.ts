import { Day } from "../day";

class Day1 extends Day {

    constructor() {
        super(1);
    }

    solveForPartOne(input: string): string {
        const inputArray = input.split('\r\n')

        let increaseCounter = 0
        inputArray.forEach((x, i) => {
            if (i === 0) return

            const previousDepth = parseInt(inputArray[i - 1])
            const currentDepth = parseInt(x)
            if (currentDepth > previousDepth) increaseCounter++
        })

        return increaseCounter.toString();
    }

    solveForPartTwo(input: string): string {
        const inputArray = input.split('\r\n')
        // const averagedInputs = inputArray.map((x, i) => {
        //     if (i === 0 || i === inputArray.length - 1) return null
        //     const previous = parseInt(inputArray[i-1])
        //     const current = parseInt(x)
        //     const next = parseInt(inputArray[i+1])

        //     return (previous + current + next) / 3
        // })
        const averagedInputs = inputArray.reduce((acc, curr, i) => {
            //console.log('iteration:', i)
            if (i === 0 || i === (inputArray.length - 1)) return acc
            const previous = parseInt(inputArray[i - 1])
            const current = parseInt(curr)
            const next = parseInt(inputArray[i + 1])
            const sum = previous + current + next
            //console.log(sum)

            return [...acc, sum]
        }, [] as number[])

        let increaseCounter = 0
        averagedInputs.forEach((x, i) => {
            if (i === 0) return

            const previousDepth = averagedInputs[i - 1]
            const currentDepth = x
            if (currentDepth > previousDepth) increaseCounter++
        })

        console.log(averagedInputs)
        return increaseCounter.toString();
    }
}

export default new Day1;
//Objective is to find the town judge, who trusts nobody but everyone trusts him.
//In our format, [a,b], a trusts b

let N = 2, trust = [[1,2]]


//O(n) solution that checks for the person with a 'trust score', or indegree, of N - 1

if (trust.length < N - 1) {
    return -1
}

let trustScores = new Array(N + 1).fill(0)

//Make sure to deduct from the truster as well for [[1,3],[2,3],[3,1]]
for (let [truster, trustee] of trust) {
    trustScores[truster]--
    trustScores[trustee]++
}

for (let i = 1; i <= N; i++) {
    if (trustScores[i] == N - 1) {
        return i
    }
}

return -1
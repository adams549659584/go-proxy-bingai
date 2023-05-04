package common

import (
	"math/rand"
	"time"
)

func RandInt(min int, max int) int {
	seed := time.Now().UnixNano()
	rng := rand.New(rand.NewSource(seed))
	return rng.Intn(max-min+1) + min
}

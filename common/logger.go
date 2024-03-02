package common

import (
	"log"
	"os"
)

const (
	DEBUG = "DEBUG"
	INFO  = "INFO"
	WARN  = "WARN"
	ERROR = "ERROR"
)

var LevelArry = [4]string{DEBUG, INFO, WARN, ERROR}

var levelMap = map[string]int{
	DEBUG: 0,
	INFO:  1,
	WARN:  2,
	ERROR: 3,
}

type logger struct {
	Level string
}

var Logger *logger

func NewLogger(level string) *logger {
	return &logger{Level: level}
}

func (l *logger) Clone() *logger {
	return &logger{Level: l.Level}
}

func (l *logger) Fatal(v ...interface{}) {
	l.Info("%v", v...)
	os.Exit(1)
}

func (l *logger) Print(level, format string, v ...interface{}) {
	if levelMap[level] >= levelMap[l.Level] {
		log.Printf("- "+level+" - "+format, v...)
	}
}

func (l *logger) Println(level string, v ...interface{}) {
	l.Print(level, "%v", v...)
}

func (l *logger) Debug(format string, v ...interface{}) {
	l.Print(DEBUG, format, v...)
}

func (l *logger) Info(format string, v ...interface{}) {
	l.Print(INFO, format, v...)
}

func (l *logger) Warn(format string, v ...interface{}) {
	l.Print(WARN, format, v...)
}

func (l *logger) Error(format string, v ...interface{}) {
	l.Print(ERROR, format, v...)
}

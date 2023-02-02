'use strict'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null
var STORAGE_KEY= 'quesDB'
//saveToStorage(STORAGE_KEY, gQuestsTree)


function createQuestsTree() {
  gQuestsTree = createQuest('Male?')
  gQuestsTree.yes = createQuest('Gandhi')
  gQuestsTree.no = createQuest('Rita')
  gCurrQuest = gQuestsTree
  gPrevQuest = null
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  // TODO: update the gPrevQuest, gCurrQuest global vars
  console.log('res',res)
  gPrevQuest=gQuestsTree
  if (res==='yes'){
    gCurrQuest=gQuestsTree.yes
  } else{
    gCurrQuest=gQuestsTree.no
  }
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // TODO: Create and Connect the 2 Quests to the quetsions tree
  
}

function getCurrQuest() {
  return gCurrQuest
}

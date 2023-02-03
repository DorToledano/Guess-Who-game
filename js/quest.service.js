'use strict'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null
var STORAGE_KEY= 'quesDB'
//saveToStorage(STORAGE_KEY, gQuestsTree)


function createQuestsTree() {
  gQuestsTree= loadFromStorage(STORAGE_KEY)
  console.log('gQuestsTree',gQuestsTree)
  
  if (!gQuestsTree ){       // || !gQuestsTree.length
    gQuestsTree = createQuest('Male?')
    gQuestsTree.yes = createQuest('Gandhi')
    gQuestsTree.no = createQuest('Rita')
    saveToStorage(STORAGE_KEY, gQuestsTree) 
  } 
  gPrevQuest = null
  gCurrQuest = gQuestsTree
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
  // ✅update the gPrevQuest, gCurrQuest global vars
  console.log('res',res)
  gPrevQuest=gCurrQuest
  gCurrQuest = gCurrQuest[res]
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // ✅Create and Connect the 2 Quests to the quetsions tree

  var newQuest= createQuest(newQuestTxt)
  newQuest.yes =createQuest(newGuessTxt)
  
  newQuest.no= gCurrQuest
  gPrevQuest[lastRes]= newQuest
  saveToStorage(STORAGE_KEY, gQuestsTree) 
}

function getCurrQuest() {
  return gCurrQuest
}

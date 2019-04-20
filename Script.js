{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf400
{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww22680\viewh11600\viewkind0
\deftab720
\pard\pardeftab720\sl300\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var SpeechRecognition = window.webkitSpeechRecognition;\
\'a0\'a0\
var recognition = new SpeechRecognition();\
//created an instantiation of the speech recognition interface.\
\'a0\
var Textbox = $('#textbox');\
var instructions = $('instructions');\'a0\
\pard\pardeftab720\sl300\partightenfactor0
\cf2 \outl0\strokewidth0 //hold the text for display after the speech is converted to text.\cf2 \outl0\strokewidth0 \strokec2 \
\pard\pardeftab720\sl300\partightenfactor0
\cf2 \
var Content = '';\
\'a0\
recognition.continuous = true;\
//speech is considered to be continuous, the speech to text conversion should be done instantaneously\
\'a0\
recognition.onresult = function(event) \{\
\'a0\
\'a0\'a0var current = event.resultIndex;\
\'a0\
\'a0\'a0var transcript = event.results[current][0].transcript;\
\
\'a0\'a0\'a0\'a0Content += transcript;\
\'a0\'a0\'a0\'a0Textbox.val(Content);\
\'a0\'a0\
\};\
\'a0\
recognition.onstart = function() \{ \
\'a0\'a0instructions.text('Voice recognition is ON.');\
\}\
\'a0\
recognition.onspeechend = function() \{\
\'a0\'a0instructions.text('No activity.');\
\}\
\'a0\
recognition.onerror = function(event) \{\
\'a0\'a0if(event.error == 'no-speech') \{\
\'a0\'a0\'a0\'a0instructions.text('Try again.');\'a0\'a0\
\'a0\'a0\}\
\}\
\'a0\
$('#start-btn').on('click', function(e) \{\
\'a0\'a0if (Content.length) \{\
\'a0\'a0\'a0\'a0Content += ' ';\
\'a0\'a0\}\
\
//start the speech listening on the button click.\
\'a0\'a0recognition.start();\
\});\
\'a0\
Textbox.on('input', function() \{\
\'a0\'a0Content = $(this).val();\
\})\
}
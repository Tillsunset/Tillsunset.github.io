var doAltAlarm=0;var isFirefoxALT=false;var isSafari=false;var isSmartPhone=false;if(window.screen.width<800)
{isSmartPhone=true;}
if(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))
{isFirefoxALT=true;}
var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function detectAltBrowser()
{if((isFirefoxALT==true)||(isSafari==true)||(isSmartPhone==true))
{doAltAlarm=1;}
else
{doAltAlarm=0;}}
detectAltBrowser();var silence=new Howl({src:["//onlineclock.net/audio/silence.mp3"],format:["mp3"],loop:true,volume:0.2,onplayerror:function(){silence.once('unlock',function(){silence.play();});}});function makeSilentAgain(){if((isSafari==false)){silence.pause();}}
function playQuietly()
{if(silence.playing()==false)
{silence.play();setTimeout(makeSilentAgain,11000);}}
function playAlarm()
{if((navigator.onLine==false))
{document.title="ALARM for "+formattedAlarmTime;var alarmDivHTML="<div id=\"alarmPlayingDiv\" style=\"display:block\"><p><br><br></p><center>";alarmDivHTML=alarmDivHTML+"<a href=\"//onlineclock.net/seconds/off.html\" style=\"text-decoration:none;\" title=\"Click to turn Alarm OFF !\"><div style=\"font-size:24px;font-weight:700;background-color:#ff0000;color:#000000;padding:24px;\"><br>ALARM OFF</div></a>";alarmDivHTML=alarmDivHTML+"</center></div>";document.getElementById("secondsDiv").innerHTML=alarmDivHTML;topLeft.style.display="none";topRight.style.display="none";var defaultAlarm=new Howl({src:["//onlineclock.net/audio/alarm2.mp3"],format:["mp3"],loop:true,volume:1.0});if(defaultAlarm.playing()==false)
{defaultAlarm.play();}
window.focus();}
else if(doAltAlarm==1)
{document.title="ALARM for "+formattedAlarmTime;var soundChoice=getCurrentSoundForAlarm();var myAlarmSound="alarm2.mp3"
if(soundChoice=="randomizer")
{var rAlarm=randomAlarm();myAlarmSound=rAlarm+".mp3";}
else if(isInArray(soundChoice,allowedSounds))
{myAlarmSound=soundChoice+".mp3";}
else
{myAlarmSound="alarm2.mp3";}
var alarmDivHTML2="<div id=\"alarmPlayingDiv\" style=\"display:block\"><p><br><br></p><center>";alarmDivHTML2=alarmDivHTML2+"<a href=\"//onlineclock.net/seconds/off.html\" style=\"text-decoration:none;\" title=\"Click to turn Alarm OFF !\"><div style=\"font-size:24px;font-weight:700;background-color:#ff0000;color:#000000;padding:24px;\"><br>ALARM OFF</div></a>";alarmDivHTML2=alarmDivHTML2+"</center></div>";document.getElementById("secondsDiv").innerHTML=alarmDivHTML2;topLeft.style.display="none";topRight.style.display="none";var sound=new Howl({src:["//onlineclock.net/audio/options/"+myAlarmSound],format:["mp3"],loop:true,volume:1.0});if(sound.playing()==false)
{sound.play();}
window.focus();}
else
{window.location.href="//onlineclock.net/seconds/alarm.html"}}
var dn;var c1=new Image();c1.src="//onlineclock.net/numerals/c1.gif";var c2=new Image();c2.src="//onlineclock.net/numerals/c2.gif";var c3=new Image();c3.src="//onlineclock.net/numerals/c3.gif";var c4=new Image();c4.src="//onlineclock.net/numerals/c4.gif";var c5=new Image();c5.src="//onlineclock.net/numerals/c5.gif";var c6=new Image();c6.src="//onlineclock.net/numerals/c6.gif";var c7=new Image();c7.src="//onlineclock.net/numerals/c7.gif";var c8=new Image();c8.src="//onlineclock.net/numerals/c8.gif";var c9=new Image();c9.src="//onlineclock.net/numerals/c9.gif";var c0=new Image();c0.src="//onlineclock.net/numerals/c0.gif";var cb=new Image();cb.src="//onlineclock.net/numerals/cb.gif";var cam=new Image();cam.src="//onlineclock.net/numerals/cam.gif";var cpm=new Image();cpm.src="//onlineclock.net/numerals/cpm.gif";function extract(h,m,s,type)
{if(!document.images)return;if(s<=9){document.g.src=c0.src;document.images.h.src=eval("c"+s+".src");}
else{document.images.g.src=eval("c"+Math.floor(s/10)+".src");document.images.h.src=eval("c"+(s%10)+".src");}}
function show3()
{if(!document.images)return;var Digital=new Date();var hours=Digital.getHours();var minutes=Digital.getMinutes();var seconds=Digital.getSeconds();var dn;var alarmTime=""+document.thisForm.alarm_second.value+"";if(seconds==""+alarmTime)
{return playAlarm();}
if((hours>=12)&&(minutes>=1)||(hours>=13))
{dn="PM";hours=hours-12;}
else
{dn="PM";}
if(hours==0)
hours=12;extract(hours,minutes,seconds,dn);setTimeout("show3()",1000);}
function changeImageSize(theWidthVar,theSizeName,theLinkNumber)
{var thatWidth=Math.floor(document.body.clientWidth);var mediumClockSize=Math.floor(thatWidth/12);var mediumClockSizeA=mediumClockSize+"px";var mediumClockSizeB=Math.floor(mediumClockSize/2)+"px";if(theWidthVar==="medium")
{document.getElementById("g").style.width=mediumClockSizeA;document.getElementById("h").style.width=mediumClockSizeA;setClockSizeCookie("medium");setClockSizeNameCookie("medium");removeUnderline(1);}
else
{var changedClockSize=Math.floor(thatWidth/(theWidthVar));var changedClockSizeA=changedClockSize+"px";var changedClockSizeB=Math.floor(changedClockSize/2)+"px";document.getElementById("g").style.width=changedClockSizeA;document.getElementById("h").style.width=changedClockSizeA;setClockSizeCookie(theWidthVar);setClockSizeNameCookie(theSizeName);if(theLinkNumber!=="")
{removeUnderline(theLinkNumber);}
else if(theSizeName=="small")
{removeUnderline(0);}
else if(theSizeName=="large")
{removeUnderline(2);}
else if(theSizeName=="x-large")
{removeUnderline(3);}}
document.getElementById("g").style.height="auto";document.getElementById("h").style.height="auto";}
function changeBackground(texture,linkNumber)
{setTextureCookie(texture);var fudgedLinkNumber;if(texture=="city")
{document.bgColor="#060606";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/city.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=4;}
else if(texture=="space")
{document.bgColor="#000216";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/space.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=6;}
else if(texture=="woods")
{document.bgColor="#556888";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/woods.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=7;}
else if(texture=="snow")
{document.bgColor="#999999";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/snow.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=9;}
else if(texture=="ocean")
{document.bgColor="#44688C";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/ocean.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=8;}
else if(texture=="leather")
{document.bgColor="#000000";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/leather.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=18;}
else if(texture=="clouds")
{document.bgColor="#0D256D";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/clouds.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=16;}
else if(texture=="factory")
{document.bgColor="#556888";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/factory.jpg')";document.body.style.backgroundSize="cover";fudgedLinkNumber=17;}
else if(texture=="panel")
{document.bgColor="#724A38";document.body.style.backgroundImage="url('//onlineclock.net/images/textures/wood.png')";document.body.style.backgroundSize="auto";fudgedLinkNumber=19;}
else
{return changeBackgroundColor(texture,"");}
if(linkNumber!=="")
{removeUnderline2(linkNumber);}
else
{removeUnderline2(fudgedLinkNumber);}}
function changeBackgroundColor(color,linkNumber)
{setTextureCookie(color);var fudgedLinkNumber;document.bgColor=color;if(color=="black"||color=="#000000")
{document.body.style.backgroundImage="none";fudgedLinkNumber=5;}
else
{document.body.style.backgroundImage="url('//onlineclock.net/images/textures/fabric.png')";document.body.style.backgroundSize="auto";}
if(color=="blue")
{fudgedLinkNumber=10;}
else if(color=="silver")
{fudgedLinkNumber=11;}
else if(color=="#006400")
{fudgedLinkNumber=12;}
else if(color=="orange")
{fudgedLinkNumber=13;}
else if(color=="#7f00ff")
{fudgedLinkNumber=14;}
else if(color=="#4b3832")
{fudgedLinkNumber=15;}
if(linkNumber!=="")
{removeUnderline2(linkNumber);}
else
{removeUnderline2(fudgedLinkNumber);}}
function removeUnderline(linknumber)
{var linkArray=[];linkArray[0]="lsmall";linkArray[1]="lmedium";linkArray[2]="llarge";linkArray[3]="lxlarge";for(i=0;i<4;i++)
{if(i==linknumber)
{document.getElementById(linkArray[i]).style.textDecoration="none";document.getElementById(linkArray[i]).style.fontWeight="normal";}
else
{document.getElementById(linkArray[i]).style.textDecoration="underline";document.getElementById(linkArray[i]).style.fontWeight="bold";}}}
function removeUnderline2(linknumber)
{var linkArray2=[];linkArray2[4]="l_city";linkArray2[5]="l_black";linkArray2[6]="l_space";linkArray2[7]="l_woods";linkArray2[8]="l_ocean";linkArray2[9]="l_snow";linkArray2[10]="l_blue";linkArray2[11]="l_silver";linkArray2[12]="l_green";linkArray2[13]="l_orange";linkArray2[14]="l_violet";linkArray2[15]="l_tan";linkArray2[16]="l_clouds";linkArray2[17]="l_factory";linkArray2[18]="l_leather";linkArray2[19]="l_panel";for(i=4;i<20;i++)
{if(i==linknumber)
{document.getElementById(linkArray2[i]).style.textDecoration="none";document.getElementById(linkArray2[i]).style.fontWeight="normal";}
else
{document.getElementById(linkArray2[i]).style.textDecoration="underline";document.getElementById(linkArray2[i]).style.fontWeight="bold";}}}
function loopThroughClass(className,newValue){var elements=document.getElementsByClassName(className);for(var i=0;i<elements.length;i++){elements[i].style.color=newValue;}}
function loopThroughClass2(className,newValue){var elements=document.getElementsByClassName(className);for(var i=0;i<elements.length;i++){elements[i].style.filter=newValue;}}
function darkMode()
{if(document.getElementById("g").style.webkitFilter=="grayscale(100%)")
{document.getElementById("g").style.webkitFilter="grayscale(0%)";document.getElementById("h").style.webkitFilter="grayscale(0%)";document.getElementById("g").style.filter="grayscale(0%)";document.getElementById("h").style.filter="grayscale(0%)";document.getElementById("dMode").style.textDecoration="underline";document.getElementById("alarm_second").style.backgroundColor="#FFFFFF";loopThroughClass("sizeLink","#FFFFFF");loopThroughClass("newMSG","red");loopThroughClass2("numeral_IMG","drop-shadow(0px 0px 3px #ff0000aa) blur(0px) brightness(1.3)");}
else
{document.getElementById("g").style.webkitFilter="grayscale(100%)";document.getElementById("h").style.webkitFilter="grayscale(100%)";document.getElementById("g").style.filter="grayscale(100%)";document.getElementById("h").style.filter="grayscale(100%)";document.getElementById("dMode").style.textDecoration="line-through";document.getElementById("alarm_second").style.backgroundColor="#666666";loopThroughClass("sizeLink","#666666");loopThroughClass("newMSG","#666666");}}
function toggleVis()
{var topLeft=document.getElementById("topLeft");var topRight=document.getElementById("topRight");var midNavBlock=document.getElementById("midNav");var botMid=document.getElementById("botMid");var aHideShow=document.getElementById('linkHideShow');if(midNavBlock.style.display==="none")
{topLeft.style.display="block";topRight.style.display="block";midNavBlock.style.display="block";botMid.style.display="block";aHideShow.innerHTML="<img src=\"//onlineclock.net/images/hide-icon20.png\" width=\"20\" height=\"20\" border=\"0\" alt=\"Hide/Show Navigation\">";aHideShow.title="Hide Navigation";}else{topLeft.style.display="none";topRight.style.display="none";midNavBlock.style.display="none";botMid.style.display="none";aHideShow.innerHTML="<img src=\"//onlineclock.net/images/show-icon20.png\" width=\"20\" height=\"20\" border=\"0\" alt=\"Hide/Show Navigation\">";aHideShow.title="Show Navigation";}}
var inFullScreenNow=0;function ieVersion(){uaString=navigator.userAgent;var match=/\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);if(match)return parseInt(match[2])}
var detectMsieVersion=ieVersion();function toggleFullscreen()
{if((detectMsieVersion!=="undefined")&&(detectMsieVersion<12))
{window.alert("Click the F11 key to toggle Fullscreen");}
else
{if(!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement){if(document.documentElement.requestFullscreen){document.documentElement.requestFullscreen();}else if(document.documentElement.mozRequestFullScreen){document.documentElement.mozRequestFullScreen();}else if(document.documentElement.webkitRequestFullscreen){document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}}else{if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}}}}
function toggleFullScreenButtons()
{var fsLink=document.getElementById("linkFullscreen");if(inFullScreenNow==1)
{fsLink.style.textDecoration="line-through";fsLink.title="Exit Fullscreen Mode";}
else
{fsLink.style.textDecoration="underline";fsLink.title="Enter Fullscreen Mode";}}
function toggleFSCounter()
{if(inFullScreenNow==1)
{inFullScreenNow=0;}
else
{inFullScreenNow=1;}}
document.addEventListener("fullscreenchange",function(){toggleFSCounter();toggleFullScreenButtons();},false);document.addEventListener("mozfullscreenchange",function(){toggleFSCounter();toggleFullScreenButtons();},false);document.addEventListener("webkitfullscreenchange",function(){toggleFSCounter();toggleFullScreenButtons();},false);document.addEventListener("msRequestFullscreen",function(){toggleFSCounter();toggleFullScreenButtons();},false);var formattedAlarmTime="";var formattedAlarmTimeForHeader="";function formatAlarmForTitle()
{if(navigator.cookieEnabled)
{var alarmS=document.getElementById("alarm_second").value;if(alarmS==0){alarmS="00";}
if((alarmS<10)&&(alarmS>0)){alarmS="0"+alarmS;}
formattedAlarmTime=":: "+alarmS+"";formattedAlarmTimeForHeader=""+alarmS+" Seconds";document.title=formattedAlarmTime+" Alarm (waiting...)";document.getElementById("secondsHeader").textContent="Alarm will go off at "+formattedAlarmTimeForHeader+":";}}
var soundPlay="<audio autoplay loop><source src=\"//onlineclock.net/audio/silence.mp3\" type=\"audio/mpeg\"></audio>";function makeSilentAgainOrig(){document.getElementById("playFix").innerHTML="";}
var origPageTitle=document.title;function playQuietlyOrig()
{try
{if((document.thisForm.alarm_second.value!=="OFF")){document.getElementById("playFix").innerHTML=soundPlay;formatAlarmForTitle();}
else
{document.title=origPageTitle;document.getElementById("secondsHeader").textContent=origHeader;}
setTimeout(makeSilentAgainOrig,11000);}
catch(err){}}
var hidden,visibilityChange;if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange";}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange";}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange";}
function handleVisibilityChange(){if(document[hidden]){if((typeof(document.thisForm)!=='undefined')&&(document.thisForm!==null))
{if((document.thisForm.alarm_second.value!=="OFF")){document.getElementById("visFix").innerHTML=soundPlay;}}}else{document.getElementById("visFix").innerHTML="";playQuietlyOrig();}}
if(typeof document.addEventListener==="undefined"||hidden===undefined){console.log("Your browser does not support the Page Visibility API.");}else{document.addEventListener(visibilityChange,handleVisibilityChange,false);}
function showDropDownMenu(){var dropDownLeft=document.getElementById("dropDownLeft");var dropbtn=document.getElementById("dropbtn");if(dropDownLeft.style.display==="none")
{dropDownLeft.style.display="block";dropbtn.style.border="1px solid #0000FF";dropbtn.style.backgroundColor="#2980B9";}
else
{dropDownLeft.style.display="none";dropbtn.style.border="0";dropbtn.style.backgroundColor="transparent";}}
function showDropDownMenu2(){var dropDownRight=document.getElementById("dropDownRight");var dropbtn2=document.getElementById("dropbtn2");if(dropDownRight.style.display==="none")
{dropDownRight.style.display="block";dropbtn2.style.border="1px solid #0000FF";dropbtn2.style.backgroundColor="#2980B9";}
else
{dropDownRight.style.display="none";dropbtn2.style.border="0";dropbtn2.style.backgroundColor="transparent";}}
function createOCCookie(cookieName,cookieValue)
{var date=new Date();date.setTime(date.getTime()+(364*24*60*60*1000));document.cookie=cookieName+"="+cookieValue+"; expires="+date.toGMTString();}
function accessOCCookie(cookieName)
{var name=cookieName+"=";var allCookieArray=document.cookie.split(';');for(var i=0;i<allCookieArray.length;i++)
{var temp=allCookieArray[i].trim();if(temp.indexOf(name)==0)
return temp.substring(name.length,temp.length);}
return "";}
function checkTextureCookie()
{var texture=accessOCCookie("ocSecondsTexture");if(texture!=""&&texture!=null)
{return texture;}
else
{return "black";}}
function setTextureCookie(texture)
{if(texture!=""&&texture!=null)
{createOCCookie("ocSecondsTexture",texture);}}
function checkClockSizeCookie()
{var mainClockSize=accessOCCookie("ocSecondsSize");if(mainClockSize!=""&&mainClockSize!=null)
{return mainClockSize;}
else
{return "medium";}}
function setClockSizeCookie(size)
{if(size!=""&&size!=null)
{createOCCookie("ocSecondsSize",size);}}
function checkClockSizeNameCookie()
{var mainClockSizeName=accessOCCookie("ocSecondsSizeName");if(mainClockSizeName!=""&&mainClockSizeName!=null)
{return mainClockSizeName;}
else
{return "medium";}}
function setClockSizeNameCookie(sizeName)
{if(sizeName!=""&&sizeName!=null)
{createOCCookie("ocSecondsSizeName",sizeName);}}
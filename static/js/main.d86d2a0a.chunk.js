(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var s=a(7),i=a(2),n=a(3),r=a(5),c=a(4),l=a(6),o=a(1),p=a(0),h=a.n(p),u=a(9),m=a.n(u),d=(a(15),a(17),function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{id:this.props.id,className:this.props.klasa},this.props.displayText)}}]),t}(h.a.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("audio",{ref:this.props.myref,className:this.props.klasa,id:this.props.myid,src:this.props.source},this.props.warning)}}]),t}(h.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("button",{className:this.props.klasa,id:this.props.myid,onClick:this.props.onClick},this.props.letter,this.props.audio)}}]),t}(h.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:this.props.klasa},h.a.createElement("input",{id:this.props.mySwitchid,type:this.props.myTypeBox,onChange:this.props.myChange}),h.a.createElement("div",{className:this.props.myWrapperKlasa},h.a.createElement("label",{htmlFor:this.props.myLabhtmlFor,className:this.props.myLabKlasa},h.a.createElement("span",{className:this.props.mySpanKlasa}),h.a.createElement("span",{className:this.props.mySpanKlasa}),h.a.createElement("span",{className:this.props.mySpanKlasa}))))}}]),t}(h.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{className:this.props.klasa},h.a.createElement("input",{id:this.props.mySwitchid,type:this.props.myType,min:this.props.myMin,max:this.props.myMax,value:this.props.myRangeVal,className:this.props.rangeKlasa,onChange:this.props.myChange}),h.a.createElement("div",{className:this.props.volumeTextKlasa},this.props.volumeText))}}]),t}(h.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return h.a.createElement("div",{style:this.props.myStyle,className:this.props.klasa,onClick:this.props.killClick},this.props.killSwitchText)}}]),t}(h.a.Component),k=[],j=function(e){function t(e){var a;for(var s in Object(i.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={display:null,sliderVal:50,volume:.5,mySwitch:!0,prevVolume:.5,fancy:!1},a.handleClick=a.handleClick.bind(Object(o.a)(Object(o.a)(a))),a.keyPress=a.keyPress.bind(Object(o.a)(Object(o.a)(a))),a.handleVolume=a.handleVolume.bind(Object(o.a)(Object(o.a)(a))),a.onOff=a.onOff.bind(Object(o.a)(Object(o.a)(a))),a.fancyToggle=a.fancyToggle.bind(Object(o.a)(Object(o.a)(a))),a.playAudio=a.playAudio.bind(Object(o.a)(Object(o.a)(a))),a.url="https://s3.amazonaws.com/freecodecamp/drums/",a.mp3=".mp3",a.pads={reff:["Q","W","E","A","S","D","Z","X","C"],id1:["Heater-1","Heater-2","Heater-3","Heater-4_1","Heater-6","Dsc_Oh","Kick_n_Hat","RP4_KICK_1","Cev_H2"],id2:["Chord_1","Chord_2","Chord_3","Give_us_a_light","Dry_Ohh","Bld_H1","punchy_kick_1","side_stick_1","Brk_Snr"]},a.audioRefs=[],a.pads.reff)a[s]=h.a.createRef(),a.audioRefs.push(a[s]);return a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){for(var e in window.addEventListener("keyup",this.keyPress),this.audioRefs)k.push(this[e].current)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keyup",this.keyPress),k=[this.Q.current,this.W.current,this.E.current,this.A.current,this.S.current,this.D.current,this.Z.current,this.X.current,this.C.current]}},{key:"playAudio",value:function(e,t,a){return k[e].volume=t,k[e].currentTime=0,k[e].play(),arguments}},{key:"keyPress",value:function(e){var t,a=e.key;!1===this.state.fancy?t=Object(s.a)(this.pads.id1):!0===this.state.fancy&&(t=Object(s.a)(this.pads.id2));var i=this.pads.reff.indexOf(a.toUpperCase()),n=Object(s.a)(this.playAudio(i,this.state.volume,t[i]));this.setState({display:n[2]}),this.state.mySwitch?(k[i].parentNode.classList.add("btnActive"),setTimeout(function(){k[i].parentNode.classList.remove("btnActive")},150)):(k[i].parentNode.classList.add("btnsOff"),setTimeout(function(){k[i].parentNode.classList.remove("btnsOff")},150))}},{key:"handleClick",value:function(e){var t;!1===this.state.fancy?t=Object(s.a)(this.pads.id1):!0===this.state.fancy&&(t=Object(s.a)(this.pads.id2));var a=t.indexOf(e.target.id),i=Object(s.a)(this.playAudio(a,this.state.volume,t[a]));this.setState({display:i[2]}),this.state.mySwitch?(k[a].parentNode.classList.add("btnActive"),setTimeout(function(){k[a].parentNode.classList.remove("btnActive")},150)):(k[a].parentNode.classList.add("btnsOff"),setTimeout(function(){k[a].parentNode.classList.remove("btnsOff")},150))}},{key:"handleVolume",value:function(e){this.state.mySwitch?this.setState({volume:e.target.value/100,sliderVal:e.target.value,prevVolume:e.target.value/100}):this.setState({sliderVal:e.target.value,prevVolume:e.target.value/100})}},{key:"onOff",value:function(e){this.state.mySwitch?this.setState({mySwitch:!this.state.mySwitch,volume:0}):this.setState({mySwitch:!this.state.mySwitch,volume:this.state.prevVolume,display:null})}},{key:"fancyToggle",value:function(e){this.setState({fancy:e.target.checked})}},{key:"render",value:function(){var e=this,t=this.state.fancy?this.pads.id2:this.pads.id1,a=this.state.fancy?this.pads.id2.map(function(t,a){return e.url+t+e.mp3}):this.pads.id1.map(function(t,a){return e.url+t+e.mp3}),s=this.state.display&&this.state.mySwitch?this.state.display.replace(/-|_/g," "):"No sound",i=this.state.mySwitch?"On":"Off",n=this.state.sliderVal<=33?"vol1":this.state.sliderVal>33&&this.state.sliderVal<=66?"vol2":"vol3",r=this.pads.reff.map(function(s,i){return h.a.createElement(f,{key:"outerDiv"+i,myid:t[i],klasa:"drum-pad metal linear",onClick:e.handleClick,letter:e.pads.reff[i],audio:h.a.createElement(y,{key:"audio"+i,myid:e.pads.reff[i],myref:e.audioRefs[i],klasa:"clip",source:a[i],warning:"Your browser doesn't support this audio format."})})}),c="On"===i?{color:"green"}:{color:"red"},l=this.state.mySwitch?"mt1 metal linear oval btnOn":"mt1 metal linear oval btnOff";return h.a.createElement("div",{id:"drum-machine",className:"grid-container cent"},h.a.createElement(d,{id:"display",klasa:"item1",displayText:s}),r,h.a.createElement(b,{klasa:"item3",mySwitchid:"switch",myTypeBox:"checkbox",myChange:this.fancyToggle,myWrapperKlasa:"wrap",myLabhtmlFor:"switch",myLabKlasa:"lbx",mySpanKlasa:"rib"}),h.a.createElement(v,{klasa:"item2",mySwitchid:"myRange",myType:"range",myMin:"1",myMax:"100",myRangeVal:this.state.sliderVal,rangeKlasa:"slider",myChange:this.handleVolume,volumeTextKlasa:n,volumeText:"Volume "+this.state.sliderVal}),h.a.createElement(O,{myStyle:c,klasa:l,killClick:this.onOff,killSwitchText:i}))}}]),t}(h.a.Component);m.a.render(h.a.createElement(j,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.d86d2a0a.chunk.js.map
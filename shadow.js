(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
})(this, function () {
    var f;function da(a,b){this.B=[];this.D=b;for(var c=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;c&&e==b||(this.B[d]=e,c=!1)}}var ea={};function ha(a){if(-128<=a&&128>a){var b=ea[a];if(b)return b}b=new da([a|0],0>a?-1:0);-128<=a&&128>a&&(ea[a]=b);return b}function ia(a){if(isNaN(a)||!isFinite(a))return ka;if(0>a)return la(ia(-a));for(var b=[],c=1,d=0;a>=c;d++)b[d]=a/c|0,c*=oa;return new da(b,0)}var oa=4294967296,ka=ha(0),pa=ha(1),qa=ha(16777216);
function ra(a){if(-1==a.D)return-ra(la(a));for(var b=0,c=1,d=0;d<a.B.length;d++){var e=x(a,d);b+=(0<=e?e:oa+e)*c;c*=oa}return b}f=da.prototype;f.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(ua(this))return"0";if(-1==this.D)return"-"+la(this).toString(a);for(var b=ia(Math.pow(a,6)),c=this,d="";;){var e=va(c,b),g=e.multiply(b);c=c.add(la(g));g=((0<c.B.length?c.B[0]:c.D)>>>0).toString(a);c=e;if(ua(c))return g+d;for(;6>g.length;)g="0"+g;d=""+g+d}};
function x(a,b){return 0>b?0:b<a.B.length?a.B[b]:a.D}function ua(a){if(0!=a.D)return!1;for(var b=0;b<a.B.length;b++)if(0!=a.B[b])return!1;return!0}f.compare=function(a){a=this.add(la(a));return-1==a.D?-1:ua(a)?0:1};function la(a){for(var b=a.B.length,c=[],d=0;d<b;d++)c[d]=~a.B[d];return(new da(c,~a.D)).add(pa)}
f.add=function(a){for(var b=Math.max(this.B.length,a.B.length),c=[],d=0,e=0;e<=b;e++){var g=d+(x(this,e)&65535)+(x(a,e)&65535),h=(g>>>16)+(x(this,e)>>>16)+(x(a,e)>>>16);d=h>>>16;g&=65535;h&=65535;c[e]=h<<16|g}return new da(c,c[c.length-1]&-2147483648?-1:0)};
f.multiply=function(a){if(ua(this)||ua(a))return ka;if(-1==this.D)return-1==a.D?la(this).multiply(la(a)):la(la(this).multiply(a));if(-1==a.D)return la(this.multiply(la(a)));if(0>this.compare(qa)&&0>a.compare(qa))return ia(ra(this)*ra(a));for(var b=this.B.length+a.B.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.B.length;d++)for(var e=0;e<a.B.length;e++){var g=x(this,d)>>>16,h=x(this,d)&65535,k=x(a,e)>>>16,l=x(a,e)&65535;c[2*d+2*e]+=h*l;xa(c,2*d+2*e);c[2*d+2*e+1]+=g*l;xa(c,2*d+2*e+1);c[2*d+2*e+1]+=
h*k;xa(c,2*d+2*e+1);c[2*d+2*e+2]+=g*k;xa(c,2*d+2*e+2)}for(d=0;d<b;d++)c[d]=c[2*d+1]<<16|c[2*d];for(d=b;d<2*b;d++)c[d]=0;return new da(c,0)};function xa(a,b){for(;(a[b]&65535)!=a[b];)a[b+1]+=a[b]>>>16,a[b]&=65535,b++}
function va(a,b){if(ua(b))throw Error("division by zero");if(ua(a))return ka;if(-1==a.D)return-1==b.D?va(la(a),la(b)):la(va(la(a),b));if(-1==b.D)return la(va(a,la(b)));if(30<a.B.length){if(-1==a.D||-1==b.D)throw Error("slowDivide_ only works with positive integers.");for(var c=pa;0>=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=ya(c,1),e=ya(b,1);b=ya(b,2);for(c=ya(c,2);!ua(b);){var g=e.add(b);0>=g.compare(a)&&(d=d.add(c),e=g);b=ya(b,1);c=ya(c,1)}return d}for(c=ka;0<=a.compare(b);){d=Math.max(1,
Math.floor(ra(a)/ra(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48>=e?1:Math.pow(2,e-48);g=ia(d);for(var h=g.multiply(b);-1==h.D||0<h.compare(a);)d-=e,g=ia(d),h=g.multiply(b);ua(g)&&(g=pa);c=c.add(g);a=a.add(la(h))}return c}f.and=function(a){for(var b=Math.max(this.B.length,a.B.length),c=[],d=0;d<b;d++)c[d]=x(this,d)&x(a,d);return new da(c,this.D&a.D)};f.or=function(a){for(var b=Math.max(this.B.length,a.B.length),c=[],d=0;d<b;d++)c[d]=x(this,d)|x(a,d);return new da(c,this.D|a.D)};
f.xor=function(a){for(var b=Math.max(this.B.length,a.B.length),c=[],d=0;d<b;d++)c[d]=x(this,d)^x(a,d);return new da(c,this.D^a.D)};f.shiftLeft=function(a){var b=a>>5;a%=32;for(var c=this.B.length+b+(0<a?1:0),d=[],e=0;e<c;e++)d[e]=0<a?x(this,e-b)<<a|x(this,e-b-1)>>>32-a:x(this,e-b);return new da(d,this.D)};function ya(a,b){var c=b>>5;b%=32;for(var d=a.B.length-c,e=[],g=0;g<d;g++)e[g]=0<b?x(a,g+c)>>>b|x(a,g+c+1)<<32-b:x(a,g+c);return new da(e,a.D)};function Aa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Da={},Fa={};if("undefined"===typeof Da||"undefined"===typeof Fa||"undefined"===typeof z)var z={};if("undefined"===typeof Da||"undefined"===typeof Fa||"undefined"===typeof Ha)var Ha=null;if("undefined"===typeof Da||"undefined"===typeof Fa||"undefined"===typeof Ia)var Ia=null;if("undefined"===typeof Da||"undefined"===typeof Fa||"undefined"===typeof La)var La=null;
function Ma(){Ha=function(){return console.log.apply(console,Aa(arguments))};Ia=function(){return console.error.apply(console,Aa(arguments))}}if("undefined"!==typeof Symbol){var m=Symbol;"object"!=typeof m||!m||m instanceof Array||m instanceof Object||Object.prototype.toString.call(m)}if("undefined"===typeof Da||"undefined"===typeof Fa||"undefined"===typeof af)var af=null;"undefined"!==typeof console&&Ma();
if("undefined"===typeof Da||"undefined"===typeof Fa||"undefined"===typeof bf)var bf=function(){throw Error("cljs.core/*eval* not bound");};Ma();function cf(){return new Promise(function(a){var b={statusCode:200,body:JSON.stringify({message:"Yes!! Of course!!!!"})};return a.a?a.a(b):a.call(null,b)})};function n(){return{ping:cf}}var p=["shadow","umd_helper","get_exports"],q=this;p[0]in q||!q.execScript||q.execScript("var "+p[0]);for(var r;p.length&&(r=p.shift());){var t;if(t=!p.length)t=void 0!==n;t?q[r]=n:q=q[r]&&q[r]!==Object.prototype[r]?q[r]:q[r]={}};

    return shadow.umd_helper.get_exports();
});

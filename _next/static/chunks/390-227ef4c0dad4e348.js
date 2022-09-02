"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{6128:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(7462),o=t(4942),a=t(91),c=t(1413),i=t(5671),d=t(3144),s=t(7326),l=t(2531),p=t(3568),u=t(7294),f=t(4184),h=t.n(f),v=t(4217),g=t(7822),k=function(e){for(var n=e.prefixCls,t=e.level,r=e.isStart,a=e.isEnd,c="".concat(n,"-indent-unit"),i=[],d=0;d<t;d+=1){var s;i.push(u.createElement("span",{key:d,className:h()(c,(s={},(0,o.Z)(s,"".concat(c,"-start"),r[d]),(0,o.Z)(s,"".concat(c,"-end"),a[d]),s))}))}return u.createElement("span",{"aria-hidden":"true",className:"".concat(n,"-indent")},i)},y=u.memo(k),x=t(1089),b=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],m="open",N="close",D=function(e){(0,l.Z)(t,e);var n=(0,p.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(n){(0,e.props.context.onNodeClick)(n,(0,x.F)(e.props)),e.isSelectable()?e.onSelect(n):e.onCheck(n)},e.onSelectorDoubleClick=function(n){(0,e.props.context.onNodeDoubleClick)(n,(0,x.F)(e.props))},e.onSelect=function(n){if(!e.isDisabled()){var t=e.props.context.onNodeSelect;n.preventDefault(),t(n,(0,x.F)(e.props))}},e.onCheck=function(n){if(!e.isDisabled()){var t=e.props,r=t.disableCheckbox,o=t.checked,a=e.props.context.onNodeCheck;if(e.isCheckable()&&!r){n.preventDefault();var c=!o;a(n,(0,x.F)(e.props),c)}}},e.onMouseEnter=function(n){(0,e.props.context.onNodeMouseEnter)(n,(0,x.F)(e.props))},e.onMouseLeave=function(n){(0,e.props.context.onNodeMouseLeave)(n,(0,x.F)(e.props))},e.onContextMenu=function(n){(0,e.props.context.onNodeContextMenu)(n,(0,x.F)(e.props))},e.onDragStart=function(n){var t=e.props.context.onNodeDragStart;n.stopPropagation(),e.setState({dragNodeHighlight:!0}),t(n,(0,s.Z)(e));try{n.dataTransfer.setData("text/plain","")}catch(r){}},e.onDragEnter=function(n){var t=e.props.context.onNodeDragEnter;n.preventDefault(),n.stopPropagation(),t(n,(0,s.Z)(e))},e.onDragOver=function(n){var t=e.props.context.onNodeDragOver;n.preventDefault(),n.stopPropagation(),t(n,(0,s.Z)(e))},e.onDragLeave=function(n){var t=e.props.context.onNodeDragLeave;n.stopPropagation(),t(n,(0,s.Z)(e))},e.onDragEnd=function(n){var t=e.props.context.onNodeDragEnd;n.stopPropagation(),e.setState({dragNodeHighlight:!1}),t(n,(0,s.Z)(e))},e.onDrop=function(n){var t=e.props.context.onNodeDrop;n.preventDefault(),n.stopPropagation(),e.setState({dragNodeHighlight:!1}),t(n,(0,s.Z)(e))},e.onExpand=function(n){var t=e.props,r=t.loading,o=t.context.onNodeExpand;r||o(n,(0,x.F)(e.props))},e.setSelectHandle=function(n){e.selectHandle=n},e.getNodeState=function(){var n=e.props.expanded;return e.isLeaf()?null:n?m:N},e.hasChildren=function(){var n=e.props.eventKey;return!!((e.props.context.keyEntities[n]||{}).children||[]).length},e.isLeaf=function(){var n=e.props,t=n.isLeaf,r=n.loaded,o=e.props.context.loadData,a=e.hasChildren();return!1!==t&&(t||!o&&!a||o&&r&&!a)},e.isDisabled=function(){var n=e.props.disabled;return!(!e.props.context.disabled&&!n)},e.isCheckable=function(){var n=e.props.checkable,t=e.props.context.checkable;return!(!t||!1===n)&&t},e.syncLoadData=function(n){var t=n.expanded,r=n.loading,o=n.loaded,a=e.props.context,c=a.loadData,i=a.onNodeLoad;r||c&&t&&!e.isLeaf()&&(e.hasChildren()||o||i((0,x.F)(e.props)))},e.isDraggable=function(){var n=e.props,t=n.data,r=n.context.draggable;return!(!r||r.nodeDraggable&&!r.nodeDraggable(t))},e.renderDragHandler=function(){var n=e.props.context,t=n.draggable,r=n.prefixCls;return(null===t||void 0===t?void 0:t.icon)?u.createElement("span",{className:"".concat(r,"-draggable-icon")},t.icon):null},e.renderSwitcherIconDom=function(n){var t=e.props.switcherIcon,r=e.props.context.switcherIcon,o=t||r;return"function"===typeof o?o((0,c.Z)((0,c.Z)({},e.props),{},{isLeaf:n})):o},e.renderSwitcher=function(){var n=e.props.expanded,t=e.props.context.prefixCls;if(e.isLeaf()){var r=e.renderSwitcherIconDom(!0);return!1!==r?u.createElement("span",{className:h()("".concat(t,"-switcher"),"".concat(t,"-switcher-noop"))},r):null}var o=h()("".concat(t,"-switcher"),"".concat(t,"-switcher_").concat(n?m:N)),a=e.renderSwitcherIconDom(!1);return!1!==a?u.createElement("span",{onClick:e.onExpand,className:o},a):null},e.renderCheckbox=function(){var n=e.props,t=n.checked,r=n.halfChecked,o=n.disableCheckbox,a=e.props.context.prefixCls,c=e.isDisabled(),i=e.isCheckable();if(!i)return null;var d="boolean"!==typeof i?i:null;return u.createElement("span",{className:h()("".concat(a,"-checkbox"),t&&"".concat(a,"-checkbox-checked"),!t&&r&&"".concat(a,"-checkbox-indeterminate"),(c||o)&&"".concat(a,"-checkbox-disabled")),onClick:e.onCheck},d)},e.renderIcon=function(){var n=e.props.loading,t=e.props.context.prefixCls;return u.createElement("span",{className:h()("".concat(t,"-iconEle"),"".concat(t,"-icon__").concat(e.getNodeState()||"docu"),n&&"".concat(t,"-icon_loading"))})},e.renderSelector=function(){var n,t,r=e.state.dragNodeHighlight,o=e.props,a=o.title,c=o.selected,i=o.icon,d=o.loading,s=o.data,l=e.props.context,p=l.prefixCls,f=l.showIcon,v=l.icon,g=l.loadData,k=l.titleRender,y=e.isDisabled(),x="".concat(p,"-node-content-wrapper");if(f){var b=i||v;n=b?u.createElement("span",{className:h()("".concat(p,"-iconEle"),"".concat(p,"-icon__customize"))},"function"===typeof b?b(e.props):b):e.renderIcon()}else g&&d&&(n=e.renderIcon());t="function"===typeof a?a(s):k?k(s):a;var m=u.createElement("span",{className:"".concat(p,"-title")},t);return u.createElement("span",{ref:e.setSelectHandle,title:"string"===typeof a?a:"",className:h()("".concat(x),"".concat(x,"-").concat(e.getNodeState()||"normal"),!y&&(c||r)&&"".concat(p,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},n,m,e.renderDropIndicator())},e.renderDropIndicator=function(){var n=e.props,t=n.disabled,r=n.eventKey,o=e.props.context,a=o.draggable,c=o.dropLevelOffset,i=o.dropPosition,d=o.prefixCls,s=o.indent,l=o.dropIndicatorRender,p=o.dragOverNodeKey,u=o.direction;return!t&&!1!==a&&p===r?l({dropPosition:i,dropLevelOffset:c,indent:s,prefixCls:d,direction:u}):null},e}return(0,d.Z)(t,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var e=this.props.selectable,n=this.props.context.selectable;return"boolean"===typeof e?e:n}},{key:"render",value:function(){var e,n=this.props,t=n.eventKey,c=n.className,i=n.style,d=n.dragOver,s=n.dragOverGapTop,l=n.dragOverGapBottom,p=n.isLeaf,f=n.isStart,g=n.isEnd,k=n.expanded,m=n.selected,N=n.checked,D=n.halfChecked,C=n.loading,E=n.domRef,Z=n.active,S=(n.data,n.onMouseMove),w=n.selectable,K=(0,a.Z)(n,b),O=this.props.context,P=O.prefixCls,L=O.filterTreeNode,M=O.keyEntities,T=O.dropContainerKey,G=O.dropTargetKey,I=O.draggingNodeKey,_=this.isDisabled(),H=(0,v.Z)(K,{aria:!0,data:!0}),F=(M[t]||{}).level,A=g[g.length-1],B=this.isDraggable(),j=!_&&B,R=I===t,z=void 0!==w?{"aria-selected":!!w}:void 0;return u.createElement("div",(0,r.Z)({ref:E,className:h()(c,"".concat(P,"-treenode"),(e={},(0,o.Z)(e,"".concat(P,"-treenode-disabled"),_),(0,o.Z)(e,"".concat(P,"-treenode-switcher-").concat(k?"open":"close"),!p),(0,o.Z)(e,"".concat(P,"-treenode-checkbox-checked"),N),(0,o.Z)(e,"".concat(P,"-treenode-checkbox-indeterminate"),D),(0,o.Z)(e,"".concat(P,"-treenode-selected"),m),(0,o.Z)(e,"".concat(P,"-treenode-loading"),C),(0,o.Z)(e,"".concat(P,"-treenode-active"),Z),(0,o.Z)(e,"".concat(P,"-treenode-leaf-last"),A),(0,o.Z)(e,"".concat(P,"-treenode-draggable"),j),(0,o.Z)(e,"dragging",R),(0,o.Z)(e,"drop-target",G===t),(0,o.Z)(e,"drop-container",T===t),(0,o.Z)(e,"drag-over",!_&&d),(0,o.Z)(e,"drag-over-gap-top",!_&&s),(0,o.Z)(e,"drag-over-gap-bottom",!_&&l),(0,o.Z)(e,"filter-node",L&&L((0,x.F)(this.props))),e)),style:i,draggable:j,"aria-grabbed":R,onDragStart:j?this.onDragStart:void 0,onDragEnter:B?this.onDragEnter:void 0,onDragOver:B?this.onDragOver:void 0,onDragLeave:B?this.onDragLeave:void 0,onDrop:B?this.onDrop:void 0,onDragEnd:B?this.onDragEnd:void 0,onMouseMove:S},z,H),u.createElement(y,{prefixCls:P,level:F,isStart:f,isEnd:g}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),t}(u.Component),C=function(e){return u.createElement(g.k.Consumer,null,(function(n){return u.createElement(D,(0,r.Z)({},e,{context:n}))}))};C.displayName="TreeNode",C.defaultProps={title:"---"},C.isTreeNode=1;var E=C},7822:function(e,n,t){t.d(n,{k:function(){return r}});var r=t(7294).createContext(null)},225:function(e,n,t){t.d(n,{BT:function(){return h},Ds:function(){return l},E6:function(){return v},L0:function(){return i},OM:function(){return f},_5:function(){return c},bt:function(){return s},r7:function(){return g},wA:function(){return p},yx:function(){return d}});var r=t(4902),o=t(1002),a=(t(7294),t(334));t(6128);function c(e,n){if(!e)return[];var t=e.slice(),r=t.indexOf(n);return r>=0&&t.splice(r,1),t}function i(e,n){var t=(e||[]).slice();return-1===t.indexOf(n)&&t.push(n),t}function d(e){return e.split("-")}function s(e,n){return"".concat(e,"-").concat(n)}function l(e){return e&&e.type&&e.type.isTreeNode}function p(e,n){var t=[];return function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var r=n.key,o=n.children;t.push(r),e(o)}))}(n[e].children),t}function u(e){if(e.parent){var n=d(e.pos);return Number(n[n.length-1])===e.parent.children.length-1}return!1}function f(e,n,t,r,o,a,c,i,s,l){var p,f=e.clientX,h=e.clientY,v=e.target.getBoundingClientRect(),g=v.top,k=v.height,y=(("rtl"===l?-1:1)*(((null===o||void 0===o?void 0:o.x)||0)-f)-12)/r,x=i[t.props.eventKey];if(h<g+k/2){var b=c.findIndex((function(e){return e.key===x.key})),m=c[b<=0?0:b-1].key;x=i[m]}var N=x.key,D=x,C=x.key,E=0,Z=0;if(!s.includes(N))for(var S=0;S<y&&u(x);S+=1)x=x.parent,Z+=1;var w=n.props.data,K=x.node,O=!0;return function(e){var n=d(e.pos);return 0===Number(n[n.length-1])}(x)&&0===x.level&&h<g+k/2&&a({dragNode:w,dropNode:K,dropPosition:-1})&&x.key===t.props.eventKey?E=-1:(D.children||[]).length&&s.includes(C)?a({dragNode:w,dropNode:K,dropPosition:0})?E=0:O=!1:0===Z?y>-1.5?a({dragNode:w,dropNode:K,dropPosition:1})?E=1:O=!1:a({dragNode:w,dropNode:K,dropPosition:0})?E=0:a({dragNode:w,dropNode:K,dropPosition:1})?E=1:O=!1:a({dragNode:w,dropNode:K,dropPosition:1})?E=1:O=!1,{dropPosition:E,dropLevelOffset:Z,dropTargetKey:x.key,dropTargetPos:x.pos,dragOverNodeKey:C,dropContainerKey:0===E?null:(null===(p=x.parent)||void 0===p?void 0:p.key)||null,dropAllowed:O}}function h(e,n){if(e)return n.multiple?e.slice():e.length?[e[0]]:e}function v(e){if(!e)return null;var n;if(Array.isArray(e))n={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==(0,o.Z)(e))return(0,a.ZP)(!1,"`checkedKeys` is not an array or an object"),null;n={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return n}function g(e,n){var t=new Set;function o(e){if(!t.has(e)){var r=n[e];if(r){t.add(e);var a=r.parent;r.node.disabled||a&&o(a.key)}}}return(e||[]).forEach((function(e){o(e)})),(0,r.Z)(t)}},7341:function(e,n,t){t.d(n,{S:function(){return c}});var r=t(334);function o(e,n){var t=new Set;return e.forEach((function(e){n.has(e)||t.add(e)})),t}function a(e){var n=e||{},t=n.disabled,r=n.disableCheckbox,o=n.checkable;return!(!t&&!r)||!1===o}function c(e,n,t,c){var i,d=[];i=c||a;var s,l=new Set(e.filter((function(e){var n=!!t[e];return n||d.push(e),n}))),p=new Map,u=0;return Object.keys(t).forEach((function(e){var n=t[e],r=n.level,o=p.get(r);o||(o=new Set,p.set(r,o)),o.add(n),u=Math.max(u,r)})),(0,r.ZP)(!d.length,"Tree missing follow keys: ".concat(d.slice(0,100).map((function(e){return"'".concat(e,"'")})).join(", "))),s=!0===n?function(e,n,t,r){for(var a=new Set(e),c=new Set,i=0;i<=t;i+=1)(n.get(i)||new Set).forEach((function(e){var n=e.key,t=e.node,o=e.children,c=void 0===o?[]:o;a.has(n)&&!r(t)&&c.filter((function(e){return!r(e.node)})).forEach((function(e){a.add(e.key)}))}));for(var d=new Set,s=t;s>=0;s-=1)(n.get(s)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!r(t)&&e.parent&&!d.has(e.parent.key))if(r(e.parent.node))d.add(n.key);else{var o=!0,i=!1;(n.children||[]).filter((function(e){return!r(e.node)})).forEach((function(e){var n=e.key,t=a.has(n);o&&!t&&(o=!1),i||!t&&!c.has(n)||(i=!0)})),o&&a.add(n.key),i&&c.add(n.key),d.add(n.key)}}));return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(o(c,a))}}(l,p,u,i):function(e,n,t,r,a){for(var c=new Set(e),i=new Set(n),d=0;d<=r;d+=1)(t.get(d)||new Set).forEach((function(e){var n=e.key,t=e.node,r=e.children,o=void 0===r?[]:r;c.has(n)||i.has(n)||a(t)||o.filter((function(e){return!a(e.node)})).forEach((function(e){c.delete(e.key)}))}));i=new Set;for(var s=new Set,l=r;l>=0;l-=1)(t.get(l)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!a(t)&&e.parent&&!s.has(e.parent.key))if(a(e.parent.node))s.add(n.key);else{var r=!0,o=!1;(n.children||[]).filter((function(e){return!a(e.node)})).forEach((function(e){var n=e.key,t=c.has(n);r&&!t&&(r=!1),o||!t&&!i.has(n)||(o=!0)})),r||c.delete(n.key),o&&i.add(n.key),s.add(n.key)}}));return{checkedKeys:Array.from(c),halfCheckedKeys:Array.from(o(i,c))}}(l,n.halfCheckedKeys,p,u,i),s}},1089:function(e,n,t){t.d(n,{F:function(){return x},H8:function(){return y},I8:function(){return k},km:function(){return u},oH:function(){return v},w$:function(){return f},zn:function(){return h}});var r=t(1002),o=t(4902),a=t(1413),c=t(91),i=t(8423),d=t(344),s=t(334),l=t(225),p=["children"];function u(e,n){return null!==e&&void 0!==e?e:n}function f(e){var n=e||{},t=n.title||"title";return{title:t,_title:n._title||[t],key:n.key||"key",children:n.children||"children"}}function h(e){return function e(n){return(0,d.Z)(n).map((function(n){if(!(0,l.Ds)(n))return(0,s.ZP)(!n,"Tree/TreeNode can only accept TreeNode as children."),null;var t=n.key,r=n.props,o=r.children,i=(0,c.Z)(r,p),d=(0,a.Z)({key:t},i),u=e(o);return u.length&&(d.children=u),d})).filter((function(e){return e}))}(e)}function v(e,n,t){var r=f(t),c=r._title,d=r.key,s=r.children,p=new Set(!0===n?[]:n),h=[];return function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.map((function(f,v){for(var g,k=(0,l.bt)(r?r.pos:"0",v),y=u(f[d],k),x=0;x<c.length;x+=1){var b=c[x];if(void 0!==f[b]){g=f[b];break}}var m=(0,a.Z)((0,a.Z)({},(0,i.Z)(f,[].concat((0,o.Z)(c),[d,s]))),{},{title:g,key:y,parent:r,pos:k,children:null,data:f,isStart:[].concat((0,o.Z)(r?r.isStart:[]),[0===v]),isEnd:[].concat((0,o.Z)(r?r.isEnd:[]),[v===t.length-1])});return h.push(m),!0===n||p.has(y)?m.children=e(f[s]||[],m):m.children=[],m}))}(e),h}function g(e,n,t){var a,c=("object"===(0,r.Z)(t)?t:{externalGetKey:t})||{},i=c.childrenPropName,d=c.externalGetKey,s=f(c.fieldNames),p=s.key,h=s.children,v=i||h;d?"string"===typeof d?a=function(e){return e[d]}:"function"===typeof d&&(a=function(e){return d(e)}):a=function(e,n){return u(e[p],n)},function t(r,c,i,d){var s=r?r[v]:e,p=r?(0,l.bt)(i.pos,c):"0",u=r?[].concat((0,o.Z)(d),[r]):[];if(r){var f=a(r,p),h={node:r,index:c,pos:p,key:f,parentPos:i.node?i.pos:null,level:i.level+1,nodes:u};n(h)}s&&s.forEach((function(e,n){t(e,n,{node:r,pos:p,level:i?i.level+1:-1},u)}))}(null)}function k(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.initWrapper,r=n.processEntity,o=n.onProcessFinished,a=n.externalGetKey,c=n.childrenPropName,i=n.fieldNames,d=arguments.length>2?arguments[2]:void 0,s=a||d,l={},p={},f={posEntities:l,keyEntities:p};return t&&(f=t(f)||f),g(e,(function(e){var n=e.node,t=e.index,o=e.pos,a=e.key,c=e.parentPos,i=e.level,d={node:n,nodes:e.nodes,index:t,key:a,pos:o,level:i},s=u(a,o);l[o]=d,p[s]=d,d.parent=l[c],d.parent&&(d.parent.children=d.parent.children||[],d.parent.children.push(d)),r&&r(d,f)}),{externalGetKey:s,childrenPropName:c,fieldNames:i}),o&&o(f),f}function y(e,n){var t=n.expandedKeys,r=n.selectedKeys,o=n.loadedKeys,a=n.loadingKeys,c=n.checkedKeys,i=n.halfCheckedKeys,d=n.dragOverNodeKey,s=n.dropPosition,l=n.keyEntities[e];return{eventKey:e,expanded:-1!==t.indexOf(e),selected:-1!==r.indexOf(e),loaded:-1!==o.indexOf(e),loading:-1!==a.indexOf(e),checked:-1!==c.indexOf(e),halfChecked:-1!==i.indexOf(e),pos:String(l?l.pos:""),dragOver:d===e&&0===s,dragOverGapTop:d===e&&-1===s,dragOverGapBottom:d===e&&1===s}}function x(e){var n=e.data,t=e.expanded,r=e.selected,o=e.checked,c=e.loaded,i=e.loading,d=e.halfChecked,l=e.dragOver,p=e.dragOverGapTop,u=e.dragOverGapBottom,f=e.pos,h=e.active,v=e.eventKey,g=(0,a.Z)((0,a.Z)({},n),{},{expanded:t,selected:r,checked:o,loaded:c,loading:i,halfChecked:d,dragOver:l,dragOverGapTop:p,dragOverGapBottom:u,pos:f,active:h,key:v});return"props"in g||Object.defineProperty(g,"props",{get:function(){return(0,s.ZP)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),e}}),g}}}]);
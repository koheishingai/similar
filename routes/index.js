var io=require("socket.io").listen(8082),fs=require("fs");exports.index=function(e,r){require("l"),r.writeHead(200,{"Content-Type":"text/html"}),r.write(c.l),r.end(),delete require.cache[require.resolve("l")]},io.sockets.on("connection",function(e){e.on("cgsin",function(r){cgsflg=0,hash=r.replace("#",""),require("codeg"),e.emit("cdgout",codegout),delete require.cache[require.resolve("codeg")]}),e.on("publishit",function(r,t){cgsflg=1,codegins=r,randid=t.replace("#",""),require("codeg"),delete require.cache[require.resolve("codeg")],e.emit("done")})});
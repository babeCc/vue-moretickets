export const throttle=(()=>{
    var _firstTime = 0;
    return (callback,time=500)=> {
        var _lastTime = new Date().getTime();
        
        if(_lastTime - _firstTime > time){
            callback();
            _firstTime = _lastTime;
        }
    }
})()
 
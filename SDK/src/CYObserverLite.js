/**
 * Created by James on 2016/2/26.
 */



var CYObserverLite = function (model) {
    this.observerObj = model;
    this.observers = {};

};

CYObserverLite.prototype.set = function (path, value) {
    var observerInfo = {};
    var pathList = path.split(".");

    var oldObj = CYUtility.clone(this.observerObj);
    if (path == "") {
        this.observerObj = CYUtility.clone(value);
    } else {
        setObjByProperty(this.observerObj, path, value);
    }

    for (var key in this.observers) {
        //var obsPathList = key.split(".");
        //_.find
        var keyList = key.split(".");
        if (path == "" || pathList.length <= keyList.length) {
            var checkNotEqualKey = false;
            for (var index in pathList) {
                var pathKey = pathList[index];
                var keyListKey = keyList[index];
                if (pathKey != keyListKey) {
                    checkNotEqualKey = true;
                }
            }
            if (checkNotEqualKey && path != "") {

            } else {
                var oldValue = CYUtility.deepFind(oldObj, key);
                var currentValue = CYUtility.deepFind(this.observerObj, key);
                var isSame = CYUtility.deepCompare(oldValue, currentValue);
                if (isSame == false) {
                    observerInfo.type = CYObserverLite.Type.UpdateType;
                    observerInfo.path = path;
                    observerInfo.value = CYUtility.deepFind(this.observerObj, key);
                    observerInfo.oldValue = CYUtility.deepFind(oldObj, key);

                    if (typeof observerInfo.value !== "undefined") {
                        for (var i in this.observers[key]) {
                            this.observers[key][i](observerInfo.path, observerInfo.value, observerInfo.oldValue, this.observerObj);
                        }
                    }

                }
            }

        }
    }
    ////has some one like the path
    //if ( this.observers.hasOwnProperty(path)) {
    //    if (this.observers[path].length > 0) {
    //        var oldValue = CYUtility.deepFind(this.observerObj, path);
    //        setObjByProperty(this.observerObj, path, value);
    //        var isSame = CYUtility.deepCompare(oldValue, value);
    //        if (isSame == false) {
    //            observerInfo.type = CYObserverLite.Type.UpdateType;
    //            observerInfo.path = path;
    //            observerInfo.value = value;
    //            observerInfo.oldValue = oldValue;
    //
    //            for (var i in this.observers[path]) {
    //                this.observers[path][i](observerInfo.path, observerInfo.value, observerInfo.oldValue, this.observerObj);
    //            }
    //        }
    //    }
    //} else {
    //    setObjByProperty(this.observerObj, path, value);
    //}

};

CYObserverLite.prototype.get = function (path) {
    return CYUtility.deepFind(this.observerObj, path);
};

CYObserverLite.prototype.addObserver = function (path, callBack) {
    this.observers[path] = this.observers[path] || [];
    if (this.observers[path].indexOf(callBack) == -1) {
        this.observers[path].push(callBack);
    }
};

CYObserverLite.prototype.notify = function (path) {
    var observerInfo = {};
    for (var i in this.observers[path]) {
        observerInfo.path = path;
        observerInfo.value = CYUtility.deepFind(this.observerObj, path);
        observerInfo.oldValue = observerInfo.value;
        this.observers[path][i](observerInfo.path, observerInfo.value, observerInfo.oldValue, this.observerObj);
    }
};

CYObserverLite.prototype.removeObserver = function(property, observer) {
    if (this.observers[property]) {
        var index = this.observers[property].indexOf(observer);
        if (index >= 0) {
            this.observers[property].splice(index, 1);
        }
    }

};

CYObserverLite.prototype.removeAllObserver = function () {
    for (var key in this.observers) {
        this.observers[key].splice(0, this.observers[key].length);
    }
};

CYObserverLite.Type = {
    None: 0,
    UpdateType: 1
};
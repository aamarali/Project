"use strict";
(function (DBOperation) {
    DBOperation[DBOperation["create"] = 1] = "create";
    DBOperation[DBOperation["update"] = 2] = "update";
    DBOperation[DBOperation["delete"] = 3] = "delete";
})(exports.DBOperation || (exports.DBOperation = {}));
var DBOperation = exports.DBOperation;
//# sourceMappingURL=enum.js.map
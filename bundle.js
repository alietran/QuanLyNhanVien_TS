/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const NhanVien_1 = __webpack_require__(2);
const DSNhanVien_1 = __webpack_require__(1);
let dsnv = new DSNhanVien_1.DanhSachNhanVien();
// let nv = new NhanVien;
function ThemNhanVien() {
    // Lấy dữ liệu người dùng nhập vào
    let manv = parseInt(document.getElementById("manv").value);
    let hoten = document.getElementById("hoten").value;
    let luongCB = parseInt(document.getElementById("luongcb").value);
    let loainv = 1;
    let rdbLoaiNhanVien = document.getElementsByName("loainv");
    // console.log(rdbLoaiNhanVien);
    // c!: dùng for thông thường
    // for( let i = 0 ; i < rdbLoaiNhanVien.length ; i++){
    //     let rdbCheck = rdbLoaiNhanVien[i];
    //     if(rdbCheck.checked){
    //         loainv = rdbLoaiNhanVien[i].value;
    //     }
    // }
    for (let rdbCheck of rdbLoaiNhanVien) {
        if (rdbCheck.checked) {
            loainv = parseInt(rdbCheck.value);
        }
    }
    // Khởi tạo đối tượng nhân viên
    let nhanVien = new NhanVien_1.NhanVien(manv, hoten, luongCB, loainv);
    // Thêm nhân viên vào ds nhân viên
    dsnv.ThemNhanVien(nhanVien);
    // Cập nhật dsnv
    CapNhatDSNV();
}
// Thêm sự kiện cho nút button
(_a = document.getElementById('btnThemNhanVien')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ThemNhanVien);
function CapNhatDSNV() {
    // dom đến tbodyNhanVien
    let tblDSNV = document.getElementById("tbodyNhanVien");
    // Clear
    tblDSNV.innerHTML = "";
    for (let nv of dsnv.DsNhanVien) {
        let tdMaNV = TaoTD('MaNV', nv.maNV);
        let tdHoTen = TaoTD('HoTen', nv.HoTen);
        let tdLuongCB = TaoTD('LuongCB', nv.LuongCB);
        let tdLoaiNV = TaoTD('LoaiNV', nv.layTenLoaiNV());
        let tdTongLuong = TaoTD('TongLuong', nv.TinhLuongNV());
        // Tạo tr
        let trNhanVien = document.createElement("tr");
        trNhanVien.appendChild(tdMaNV);
        trNhanVien.appendChild(tdHoTen);
        trNhanVien.appendChild(tdLuongCB);
        trNhanVien.appendChild(tdLoaiNV);
        trNhanVien.appendChild(tdTongLuong);
        tblDSNV.appendChild(trNhanVien);
    }
}
function TaoTD(className, Value) {
    let td = document.createElement("td");
    td.className = className;
    td.innerHTML = Value;
    return td;
}
//# sourceMappingURL=main.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanhSachNhanVien = void 0;
class DanhSachNhanVien {
    constructor() {
        this.DsNhanVien = [];
    }
    // thêm nhân viên
    ThemNhanVien(NhanVienThem) {
        this.DsNhanVien.push(NhanVienThem);
    }
}
exports.DanhSachNhanVien = DanhSachNhanVien;
//# sourceMappingURL=DSNhanVien.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

"use strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = void 0;
class NhanVien {
    // Phương thưc khởi tạo
    constructor(maNV, hoten, luongCB, loaiNV) {
        this.maNV = maNV;
        this.HoTen = hoten;
        this.LuongCB = luongCB;
        this.LoaiNV = loaiNV;
    }
    TinhLuongNV() {
        let tongLuong = 0;
        // xử lý tính lương
        switch (this.LoaiNV) {
            case 1:
                {
                    tongLuong = this.LuongCB;
                }
                ;
                break;
            case 2:
                {
                    tongLuong = this.LuongCB * 1.5;
                }
                ;
                break;
            case 3:
                {
                    tongLuong = this.LuongCB * 3;
                }
                ;
                break;
            default:
                {
                    tongLuong = this.LuongCB;
                }
                ;
                break;
        }
        return tongLuong;
    }
    layTenLoaiNV() {
        switch (this.LoaiNV) {
            case 1:
                {
                    return 'Nhân viên thường';
                }
                ;
            case 2:
                {
                    return 'Quản lý';
                }
                ;
            case 3:
                {
                    return 'Sếp';
                }
                ;
            default:
                {
                    return 'Nhân viên thường';
                }
                ;
        }
    }
}
exports.NhanVien = NhanVien;
//# sourceMappingURL=NhanVien.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ]);
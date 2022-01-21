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
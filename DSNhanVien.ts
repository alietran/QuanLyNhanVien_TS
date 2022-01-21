
import { NhanVien } from "./NhanVien";

export class DanhSachNhanVien{
    public DsNhanVien : Array<NhanVien> = [];
    constructor(){

    }
    // thêm nhân viên
    public ThemNhanVien(NhanVienThem: NhanVien){
        this.DsNhanVien.push(NhanVienThem);
    }
}
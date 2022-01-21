import { NhanVien } from './NhanVien';

import { DanhSachNhanVien } from './DSNhanVien';

let dsnv = new DanhSachNhanVien();
// let nv = new NhanVien;

function ThemNhanVien () {
    // Lấy dữ liệu người dùng nhập vào
    let manv:number = parseInt((<HTMLInputElement>document.getElementById("manv")).value);
    let hoten:string = (<HTMLInputElement>document.getElementById("hoten")).value;
    let luongCB: number = parseInt((<HTMLInputElement>document.getElementById("luongcb")).value);
    let loainv : number = 1;
    let rdbLoaiNhanVien:any = document.getElementsByName("loainv");
    // console.log(rdbLoaiNhanVien);
    // c!: dùng for thông thường
    // for( let i = 0 ; i < rdbLoaiNhanVien.length ; i++){
    //     let rdbCheck = rdbLoaiNhanVien[i];
    //     if(rdbCheck.checked){
    //         loainv = rdbLoaiNhanVien[i].value;
    //     }
    // }

    for(let rdbCheck of rdbLoaiNhanVien){
        if(rdbCheck.checked){
            loainv =parseInt(rdbCheck.value) ;
        }
    }

    // Khởi tạo đối tượng nhân viên
    let nhanVien =  new NhanVien(manv, hoten, luongCB, loainv);
    // Thêm nhân viên vào ds nhân viên
    dsnv.ThemNhanVien(nhanVien);
    // Cập nhật dsnv
    CapNhatDSNV();
}

// Thêm sự kiện cho nút button
document.getElementById('btnThemNhanVien')?.addEventListener("click",ThemNhanVien)

function CapNhatDSNV(){
    // dom đến tbodyNhanVien
    let tblDSNV = <HTMLInputElement>document.getElementById("tbodyNhanVien");
    // Clear
    tblDSNV.innerHTML  = "";
     
    for(let nv of dsnv.DsNhanVien){
        let tdMaNV = TaoTD('MaNV', nv.maNV);
        let tdHoTen = TaoTD('HoTen', nv.HoTen);
        let tdLuongCB  = TaoTD('LuongCB', nv.LuongCB);
        let tdLoaiNV= TaoTD('LoaiNV', nv.layTenLoaiNV());    
        let tdTongLuong= TaoTD('TongLuong', nv.TinhLuongNV());

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
function TaoTD(className :any,Value:any){
    let td = document.createElement("td");
    td.className = className;
    td.innerHTML = Value;
    return td;
}
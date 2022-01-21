export class NhanVien {
   public maNV : number;
    public HoTen : string;
    public LuongCB : number;
    public LoaiNV  : number;
    // Phương thưc khởi tạo
    constructor(maNV : number, hoten:string, luongCB:number, loaiNV:number){
        this.maNV = maNV;
        this.HoTen = hoten;
        this.LuongCB = luongCB;
        this.LoaiNV = loaiNV;
    }
    public TinhLuongNV() : number {
        let tongLuong : number = 0;
        // xử lý tính lương
        switch(this.LoaiNV){
            case 1: { tongLuong = this.LuongCB };break;
            case 2: {tongLuong = this.LuongCB * 1.5 }; break;
            case 3: {tongLuong = this.LuongCB * 3}; break;
            default: {
                tongLuong  = this.LuongCB 
            }; break;
        }
        return tongLuong;
    }
    public layTenLoaiNV(): string{
         switch(this.LoaiNV){
            case 1: { return 'Nhân viên thường' };
            case 2: { return 'Quản lý'}; 
            case 3: { return 'Sếp'}; 
            default: {
              return 'Nhân viên thường';
            }; 
        }
        
    }
}

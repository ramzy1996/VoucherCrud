using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Voucher
    {
        /*public Voucher()
        {
            this.VoucherCode = "VR#" + DateTime.Now.Date.ToString("MMdd") + "-" + Guid.NewGuid().ToString().Substring(0, 5).ToUpper();
        }*/
        [Key]
        public int VoucherId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string VoucherName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string VoucherCode { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public int VoucherAmount { get; set; }


    }
}

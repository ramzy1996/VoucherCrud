using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public int Total { get; set; }

        [ForeignKey("Voucher")]
        public int VoucherId { get; set; }
        public Voucher Voucher { get; set; }

        [ForeignKey("Promotion")]
        public int PromotionId { get; set; }
        public Promotion Promotion { get; set; }


        [Column(TypeName = "nvarchar(50)")]
        public int TotalDiscount { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public int SubTotal { get; set; }
        
    }
}

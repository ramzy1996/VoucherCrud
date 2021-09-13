using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Promotion
    {
        /*public Promotion()
        {
            this.PromotionCode = "Pro#" + DateTime.Now.Date.ToString("MMdd") + "-" + Guid.NewGuid().ToString().Substring(0, 5).ToUpper();
        }*/
        [Key]
        public int PromotionId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string PromotionName { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string PromotionCode { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public int MinAmount { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public int MaxAmount { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public int PromotionAmount { get; set; }
    }
}

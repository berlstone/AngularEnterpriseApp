// ======================================
// Author: Clinton Beyerle
// Email:  info@berlstone.com
// Copyright (c) 2017 www.berlstone.com
// 

// ======================================

using System;
using System.Linq;


namespace NgEnterprise.Web.ViewModels
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public decimal Discount { get; set; }
        public string Comments { get; set; }
    }
}

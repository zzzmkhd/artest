let cat_data = {"d_cat": ["c800000", "c100000", "c200000", "c700000", "c900000", "c0", "c500000", "c400000"], "c_cat": ["c830000", "c840000", "c850000", "c110000", "c140000", "c130000", "c190000", "c860000", "c230000", "c710000", "c730000", "c720000", "c240000", "c990000", "c910000", "c0", "c510000", "c210000", "c290000", "c250000", "c460000"], "s_cat": ["c830300", "c830100", "c840100", "c850100", "c850200", "c111300", "c140300", "c130100", "c190200", "c130200", "c130400", "c110300", "c140400", "c110100", "c140200", "c860100", "c232800", "c110600", "c111200", "c111900", "c130300", "c110400", "c710900", "c711000", "c730100", "c739800", "c720100", "c710300", "c710500", "c710100", "c720300", "c730400", "c249700", "c990900", "c910100", "c110700", "c0", "c111700", "c140600", "c510100", "c119900", "c140100", "c149900", "c111500", "c249900", "c919800", "c111600", "c110500", "c839900", "c111800", "c232100", "c240200", "c212900", "c112100", "c212200", "c212100", "c110800", "c111400", "c213200", "c212600", "c212300", "c212700", "c232500", "c240400", "c213100", "c213300", "c240100", "c232600", "c232300", "c212800", "c212500", "c112000", "c110200", "c111000", "c232900", "c111100", "c240500", "c299900", "c250400", "c466100", "c212400", "c232700", "c232200"], "ss_cat": ["c830303", "c830101", "c840115", "c830312", "c850105", "c850215", "c850213", "c850101", "c111301", "c111305", "c140323", "c130125", "c190201", "c130205", "c130497", "c130121", "c130123", "c130203", "c110303", "c140305", "c140315", "c140313", "c140407", "c140405", "c110133", "c140211", "c860101", "c140497", "c130131", "c232801", "c110141", "c110601", "c110113", "c111203", "c111909", "c130305", "c110401", "c140401", "c140203", "c110111", "c110131", "c110405", "c140209", "c130137", "c710901", "c710902", "c710903", "c710904", "c711099", "c711002", "c730101", "c739802", "c730104", "c720102", "c711003", "c110149", "c730118", "c710301", "c710598", "c710398", "c710112", "c720301", "c730401", "c710110", "c710113", "c710115", "c710102", "c710101", "c710513", "c249713", "c990903", "c140311", "c910107", "c910104", "c111901", "c110707", "c850212", "c850103", "c990999", "c140316", "c850203", "c111303", "c910103", "c850205", "c0", "c130303", "c111701", "c110797", "c130199", "c130127", "c110705", "c140651", "c130139", "c140307", "c111905", "c130399", "c130141", "c110725", "c140201", "c990901", "c110605", "c510115", "c119999", "c830104", "c830315", "c850104", "c130301", "c130129", "c130198", "c140199", "c850102", "c149999", "c110723", "c130401", "c140321", "c111503", "c249999", "c130403", "c919802", "c140301", "c140671", "c111601", "c850214", "c111699", "c140299", "c850208", "c850202", "c110504", "c850216", "c111597", "c111997", "c111501", "c111507", "c111511", "c840114", "c140641", "c140205", "c130297", "c110139", "c140681", "c839999", "c111801", "c140397", "c110791", "c140317", "c110703", "c232107", "c111205", "c830114", "c240201", "c140325", "c212919", "c112197", "c111805", "c212207", "c232813", "c111207", "c111399", "c110502", "c212103", "c110603", "c130135", "c111603", "c111201", "c111307", "c110129", "c111907", "c111807", "c110511", "c112105", "c110505", "c110803", "c111405", "c213203", "c110805", "c212617", "c212641", "c212105", "c212305", "c212707", "c110721", "c232501", "c212301", "c213201", "c212917", "c240405", "c110109", "c110121", "c110137", "c110125", "c110142", "c110501", "c140691", "c110509", "c110107", "c140403", "c213107", "c213101", "c213311", "c213301", "c213305", "c213309", "c212111", "c212101", "c140297", "c140111", "c140327", "c140101", "c140115", "c212307", "c240413", "c110802", "c240197", "c111897", "c140103", "c212109", "c232605", "c232301", "c212805", "c212903", "c212915", "c212913", "c212201", "c232105", "c212311", "c212501", "c232803", "c232307", "c212801", "c212205", "c212709", "c212905", "c212203", "c232313", "c212701", "c212713", "c232607", "c212705", "c232825", "c212901", "c212803", "c112001", "c111209", "c112101", "c110301", "c140695", "c232503", "c240101", "c110203", "c110507", "c110101", "c110597", "c110143", "c232103", "c111605", "c111607", "c240103", "c212911", "c212809", "c212609", "c212303", "c990902", "c140661", "c140107", "c111001", "c111397", "c232905", "c232505", "c110801", "c130133", "c110415", "c111509", "c111005", "c111703", "c110205", "c111009", "c110413", "c140197", "c110209", "c110517", "c111113", "c110503", "c213103", "c110807", "c140601", "c110403", "c110411", "c110515", "c110103", "c110135", "c240503", "c110117", "c212703", "c140623", "c830304", "c840102", "c299999", "c212623", "c250405", "c212601", "c830107", "c111803", "c212507", "c830106", "c111401", "c466105", "c212401", "c249709", "c213105", "c232823", "c232703", "c232303", "c232111", "c232113", "c212505", "c232299", "c111999"]}
function Seker() {
    window.alert('seu Feijão é Seker');
}
function Barbunya() {
    window.alert('seu Feijão é Bombay');
}
function Cali() {
    window.alert('seu Feijão é Cali');
}
function Dermosan() {
    window.alert('seu Feijão é Dermosan');
}
function Horoz() {
    window.alert('seu Feijão é Horoz ');
}
function Sira() {
    window.alert('seu Feijão é Sira');
}


function enviar() {
    console.log("enviar");
    var perimetro = parseFloat(document.getElementById("perimetro").value);
    var eixoPrincipal = parseFloat(document.getElementById("eixoPrincipal").value);
    var eixoMenor = parseFloat(document.getElementById("eixoMenor").value);
    var proporcao = parseFloat(document.getElementById("proporcao").value);
    var solidez = parseFloat(document.getElementById("solidez").value);
    var compacteness = parseFloat(document.getElementById("compacteness").value);

    console.log("Eixo Principal: " + eixoPrincipal);
    console.log("perimetro: " + perimetro);
    console.log("eixoMenor: " + eixoMenor);
    console.log("proporcao: " + proporcao);
    console.log("solidez: " + solidez);
    console.log("compacteness: " + compacteness);

    if (eixoPrincipal > 0.1794){
        window.alert("valor de Eixo Principal deve ser menor que: 0.01794");
    }

    if (eixoMenor > 0.1908){
        window.alert("valor de Eixo Menor deve ser menor que: 0.1908");
    }

    if (perimetro > 0.1277){
        window.alert("valor de Perimetro deve ser menor que: 0.1277");
    }

    if (compacteness > 0.7078){
        window.alert("valor de compacteness deve ser menor que: 0.7078");
    }

    if (solidez > 0.9627){
        window.alert("valor de solidez deve ser menor que: 0.9627");
    }


    if (eixoPrincipal <= 0.1794) {//1
        if (eixoMenor <= 0.1908) {//2
            if (perimetro <= 0.1277) {//3
                if (compacteness <= 0.7078) {//4
                    if (perimetro <= 0.1112) {//5
                        if (eixoMenor <= 0.1796) {//6
                            if (eixoMenor <= 0.1569) {//7
                                Dermosan();
                            } else if (eixoMenor > 0.1575) {//8 ;1
                                if (solidez <= 0.9627) {
                                    Dermosan();
                                } else if (solidez > 0.9627) {
                                    if (eixoMenor <= 0.1688) {
                                        Seker();
                                    } else {
                                        Dermosan();
                                    }
                                }
                            }

                        }

                    } else if (perimetro > 0.1112) {
                        if (solidez <= 0.902) {
                            if (solidez <= 0.9011) {
                                if (eixoMenor <= 0.1281) {
                                    Dermosan();
                                } else if (eixoMenor > 0.1281) {
                                    if (compacteness <= 0.5227) {
                                        if (eixoPrincipal <= 0.1466) {
                                            if (eixoPrincipal <= 0.1389) {
                                                if (eixoMenor <= 0.1308) {
                                                    Sira;
                                                } else if (eixoMenor > 0.1308) {
                                                    if (compacteness <= 0.488) {
                                                        Dermosan();
                                                    } else if (compacteness > 0.488) {
                                                        if (compacteness <= 0.5094) {
                                                            Sira();
                                                        } else {
                                                            Dermosan();
                                                        }
                                                    }
                                                }
                                            } else {
                                                Sira();
                                            }
                                        } else {
                                            Dermosan();
                                        }

                                    } else {
                                        Dermosan();
                                    }
                                }
                            } else {
                                Horoz();
                            }
                        } else if (solidez > 0.902) {
                            if (compacteness <= 0.6457) {
                                if (perimetro <= 0.1233) {
                                    if (eixoMenor <= 0.1141) {
                                        if (eixoMenor <= 0.1112) {
                                            Dermosan();
                                        } else {
                                            Horoz();
                                        }
                                    } else if (eixoMenor > 0.1141) {
                                        if (perimetro < 0.1113) {
                                            Sira();
                                        } else if (perimetro > 0.1113) {
                                            if (compacteness <= 0.5472) {
                                                Dermosan();
                                            } else if (compacteness <= 0.5483) {
                                                Sira();
                                            } else if (compacteness > 0.5483) {
                                                if (eixoMenor <= 0.1567) {
                                                    Dermosan();
                                                } else if (eixoMenor > 0.1567) {
                                                    if (perimetro <= 0.1119) {
                                                        Sira();
                                                    } else if (perimetro > 0.1119) {
                                                        if (eixoPrincipal <= 0.1251) {
                                                            Dermosan();
                                                        } else if (eixoPrincipal > 0.1251) {
                                                            if (eixoPrincipal <= 0.1257) {
                                                                Sira();
                                                            } else if (eixoPrincipal > 0.1257) {
                                                                if (compacteness <= 0.5844) {
                                                                    Dermosan();
                                                                } else if (compacteness > 0.5844) {
                                                                    if (perimetro <= 0.1189) {
                                                                        Seker();
                                                                    } else if (perimetro > 0.1189) {
                                                                        Dermosan();
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                        }
                                    }

                                } else if (perimetro > 0.1233) {
                                    if (perimetro <= 0.1238) {
                                        if (solidez <= 0.9322) {
                                            Sira();
                                        } else if (solidez > 0.9322) {
                                            Dermosan();
                                        }
                                    } else if (perimetro > 0.1238) {
                                        if (compacteness <= 0.6103) {
                                            if (eixoMenor <= 0.1223) {
                                                Dermosan();
                                            } else if (eixoMenor > 0.1223) {
                                                if (perimetro <= 0.1255) {
                                                    Dermosan();
                                                } else if (perimetro > 0.1255) {
                                                    if (eixoMenor <= 0.1534) {
                                                        if (proporcao <= 0.3822) {
                                                            if (solidez <= 0.9353) {
                                                                if (eixoMenor <= 0.1503) {
                                                                    Dermosan();
                                                                } else if (eixoMenor > 0.1503) {
                                                                    Sira();
                                                                }
                                                            } else if (solidez > 0.1503) {
                                                                Sira();
                                                            }
                                                        } else if (proporcao > 0.3822) {
                                                            Dermosan();
                                                        }

                                                    } else if (eixoMenor > 0.1534) {
                                                        Dermosan();
                                                    }
                                                }
                                            }

                                        } else if (compacteness > 0.6103) {
                                            Sira();
                                        }

                                    }

                                }

                            } else if (compacteness > 0.6457) {
                                Seker();
                            }


                        }
                    }

                } else if (compacteness > 0.7078) {
                    if (eixoMenor <= 0.1726) {
                        Dermosan();
                    } else if (eixoMenor > 0.1726) {
                        Seker();
                    }
                }
                /*else if(perimetro>0.1112){
                    if(solidez<=0.902){
                        if(solidez<=0.9011){
                            if(eixoMenor<=0.1281){
                                Dermosan();
                            }else if(eixoMenor>0.1281){
                                if(compacteness<=0.5227){
                                    if(eixoPrincipal<=0.1466){
                                        if(eixoPrincipal<=0.1389){
                                            if(eixoMenor<=0.1308){
                                                Sira();
                                            }else if(eixoMenor>0.1308){
                                                if(compacteness<=0.488){
                                                    Dermosan();
                                                }else if(compacteness>0.488){
                                                    if(compacteness<=0.5094){
                                                        Sira();
                                                    }else if(compacteness>0.5094){
                                                        Dermosan();
                                                    }
                                                }
                                            }
                                        }else if(eixoPrincipal>0.1389){
                                            Sira();
                                        }

                                    }else if(eixoPrincipal>0.1466){
                                        Dermosan();
                                    }

                                }else if(compacteness>0.5227){
                                    Dermosan();
                                }

                            }

                        }else if(solidez>0.9011){
                            Horoz();
                        }

                    }else if(solidez>0.902){
                        if(compacteness<=0.6457){
                            if(perimetro<=0.1233)
                        }

                    }
                }*/
            } else if (perimetro > 0.1277) {
                if (perimetro <= 0.1468) {
                    if (solidez <= solidez <= 0.9248) {
                        if (proporcao <= 0.3043) {
                            if (compacteness <= 0.5625) {
                                if (proporcao <= 0.2912) {
                                    Sira();
                                } else if (proporcao > 0.2912) {
                                    if (perimetro <= 0.1326) {
                                        Sira();
                                    } else if (perimetro > 0.1326) {
                                        if (eixoMenor <= 0.181) {
                                            Dermosan();
                                        } else if (eixoMenor > 0.181) {
                                            Sira();
                                        }
                                    }
                                }

                            } else if (compactenes >= 0.5625) {
                                if (perimetro <= 0.1309) {
                                    Sira();
                                } else if (perimetro > 0.1309) {
                                    Dermosan();
                                }
                            }

                        } else if (proporcao > 0.3043) {
                            if (eixoPrincipal <= 0.1479) {
                                Dermosan();
                            } else if (eixoPrincipal > 0.1479) {
                                if (solidez <= 0.9193) {
                                    if (solidez <= 0.9019) {
                                        if (eixoMenor <= 0.1387) {
                                            if (compacteness <= 0.3183) {
                                                Horoz();
                                            } else if (compacteness > 0.3183) {
                                                Dermosan();
                                            }

                                        } else if (eixoMenor > 0.1387) {
                                            if (compacteness <= 0.5025) {
                                                if (solidez <= 0.8835) {
                                                    if (eixoPrincipal <= 0.1578) {
                                                        if (compacteness <= 0.4535) {
                                                            Horoz();
                                                        } else if (compacteness > 0.4535) {
                                                            Dermosan();
                                                        }
                                                    } else if (eixoPrincipal > 0.1578) {
                                                        if (compacteness <= 0.4293) {
                                                            Sira();
                                                        } else if (compacteness > 0.4293) {
                                                            if (compacteness <= 0.459) {
                                                                Dermosan();
                                                            } else if (compacteness > 0.459) {
                                                                Sira();
                                                            }
                                                        }
                                                    }

                                                } else if (solidez > 0.8835) {
                                                    Sira();
                                                }

                                            } else if (compacteness > 0.5025) {
                                                Dermosan();
                                            }
                                        }

                                    } else if (solidez > 0.9019) {
                                        if (eixoMenor <= 0.1795) {
                                            if (eixoMenor <= 0.1677) {
                                                if (perimetro <= 0.1394) {
                                                    if (perimetro <= 0.137) {
                                                        if (perimetro <= 0.1357) {
                                                            if (compacteness <= 0.4523) {
                                                                if (eixoMenor <= 0.1457) {
                                                                    Dermosan();
                                                                } else if (eixoMenor > 0.1457) {
                                                                    Sira();
                                                                }
                                                            } else if (compacteness > 0.4523) {
                                                                Dermosan();
                                                            }
                                                        } else if (perimetro > 0.1357) {
                                                            Sira();
                                                        }
                                                    } else if (perimetro > 0.137) {
                                                        Dermosan();
                                                    }

                                                } else if (perimetro > 0.1394) {
                                                    if (solidez <= 0.9139) {
                                                        Sira();
                                                    } else if (solidez <= 0.9139) {
                                                        Dermosan();
                                                    }
                                                }

                                            } else if (eixoMenor > 0.1677) {
                                                Dermosan();
                                            }

                                        } else if (eixoMenor > 0.1795) {
                                            Sira();
                                        }
                                    }


                                } else if (solidez > 0.9193) {
                                    if (solidez <= 0.9206) {
                                        Sira();
                                    } else if (solidez > 0.9206) {
                                        if (compacteness <= 0.5028) {
                                            if (solidez <= 0.9225) {
                                                if (eixoPrincipal <= 0.1575) {
                                                    Dermosan();
                                                } else if (eixoPrincipal > 0.1575) {
                                                    Sira();
                                                }
                                            } else if (solidez > 0.9225) {
                                                Dermosan();
                                            }

                                        } else if (compacteness > 0.5028) {
                                            Sira();
                                        }
                                    }
                                }
                            }
                        }

                    } else if (solidez <= solidez > 0.9248) {
                        if (perimetro <= 0.1449) {
                            if (perimetro <= 0.1438) {
                                if (eixoPrincipal <= 0.1594) {
                                    if (eixoPrincipal <= 0.1569) {
                                        if (perimetro <= 0.1416) {
                                            if (eixoPrincipal <= 0.1475) {
                                                if (eixoMenor <= 0.1698) {
                                                    if (compacteness <= 0.5251) {
                                                        if (compacteness <= 0.5212) {
                                                            Sira();
                                                        } else if (compacteness > 0.5212) {
                                                            Dermosan();
                                                        }

                                                    } else if (compacteness > 0.5251) {
                                                        Sira();
                                                    }

                                                } else if (eixoMenor > 0.1698) {
                                                    if (perimetro <= 0.1345) {
                                                        if (compacteness <= 0.5946) {
                                                            if (eixoPrincipal <= 0.1456) {
                                                                Dermosan();
                                                            } else if (eixoPrincipal > 0.1456) {
                                                                if (eixoPrincipal <= 0.1468) {
                                                                    Sira();
                                                                } else if (eixoPrincipal > 0.1468) {
                                                                    Dermosan();
                                                                }
                                                            }

                                                        } else if (compacteness > 0.5946) {
                                                            if (solidez <= 0.9388) {
                                                                Dermosan();
                                                            } else if (solidez > 0.9388) {
                                                                Seker();
                                                            }
                                                        }

                                                    } else if (perimetro > 0.1345) {
                                                        Sira();
                                                    }
                                                }

                                            } else if (eixoPrincipal > 0.1475) {
                                                if (compacteness <= 0.5555) {
                                                    if (compacteness <= 0.5029) {
                                                        if (solidez <= 0.9488) {
                                                            Dermosan();
                                                        } else if (solidez > 0.9488) {
                                                            Sira();
                                                        }

                                                    } else if (compacteness > 0.5029) {
                                                        if (solidez <= 0.9366) {
                                                            Dermosan();
                                                        } else if (solidez > 0.9366) {
                                                            if (solidez <= 0.938) {
                                                                Sira();
                                                            } else if (solidez > 0.938) {
                                                                Dermosan();
                                                            }
                                                        }
                                                    }

                                                } else if (compacteness > 0.5555) {
                                                    Sira();
                                                }
                                            }

                                        } else if (perimetro > 0.1416) {
                                            if (compacteness <= 0.5402) {
                                                Dermosan();
                                            } else if (compacteness > 0.5402) {
                                                Sira();
                                            }
                                        }

                                    } else if (eixoPrincipal > 0.1569) {
                                        if (compacteness <= 0.4752) {
                                            Sira();
                                        } else if (compacteness > 0.4752) {
                                            if (compacteness <= 0.4935) {
                                                Dermosan();
                                            } else if (compacteness > 0.4935) {
                                                Sira();
                                            }
                                        }
                                    }

                                } else if (eixoPrincipal > 0.1594) {
                                    if (perimetro <= 0.1388) {
                                        Dermosan();
                                    } else if (perimetro > 0.1388) {
                                        if (perimetro <= 0.1403) {
                                            Sira();
                                        } else if (perimetro > 0.1403) {
                                            if (solidez <= 0.9327) {
                                                if (compacteness <= 0.4631) {
                                                    Dermosan();
                                                } else if (compacteness > 0.4631) {
                                                    Sira();
                                                }

                                            } else if (solidez > 0.9327) {
                                                Dermosan();
                                            }

                                        }
                                    }
                                }

                            } else if (perimetro > 0.1438) {
                                if (eixoMenor <= 0.1882) {
                                    Sira();
                                } else if (eixoMenor > 0.1882) {
                                    Dermosan();
                                }

                            }

                        } else if (perimetro > 0.1449) {
                            Dermosan();
                        }
                    }

                } else if (perimetro > 0.1468) {
                    if (solidez <= 0.758) {
                        Dermosan();
                    } else if (solidez > 0.758) {
                        if (proporcao <= 0.3575) {
                            if (eixoMenor <= 0.1908) {
                                if (proporcao <= 0.3527) {
                                    if (proporcao <= 0.3435) {
                                        if (compacteness <= 0.5036) {
                                            Sira();
                                        } else if (compacteness > 0.5036) {
                                            if (proporcao <= 0.3345) {
                                                if (eixoMenor <= 0.1865) {
                                                    Sira();
                                                } else if (eixoMenor > 0.1865) {
                                                    if (eixoMenor <= 0.1881) {
                                                        if (proporcao <= 0.3242) {
                                                            Sira();
                                                        } else if (proporcao > 0.3242) {
                                                            Dermosan();
                                                        }

                                                    } else if (eixoMenor > 0.1881) {
                                                        if (compacteness <= 0.5296) {
                                                            Sira();
                                                        } else if (compacteness <= 0.5296) {
                                                            Dermosan();
                                                        }
                                                    }

                                                }

                                            } else if (proporcao > 0.3345) {
                                                Dermosan();
                                            }
                                        }

                                    } else if (proporcao > 0.3435) {
                                        if (proporcao <= 0.3442) {
                                            Dermosan();
                                        } else if (proporcao > 0.3442) {
                                            if (proporcao <= 0.349) {
                                                if (perimetro <= 0.149) {
                                                    Dermosan();
                                                } else if (perimetro > 0.149) {
                                                    Sira();
                                                }

                                            } else if (proporcao > 0.349) {
                                                if (compacteness <= 0.4905) {
                                                    Sira();
                                                } else if (compacteness > 0.4905) {
                                                    Dermosan();
                                                }
                                            }
                                        }
                                    }

                                } else if (proporcao > 0.3527) {
                                    Sira();
                                }

                            } else if (eixoMenor > 0.1908) {
                                Dermosan();
                            }

                        } else if (proporcao > 0.3575) {
                            if (compacteness <= 0.4803) {
                                if (compacteness <= 0.4759) {
                                    if (eixoPrincipal <= 0.1679) {
                                        Dermosan();
                                    } else if (eixoPrincipal <= 0.1679) {
                                        if (proporcao <= 0.8862) {
                                            Sira();
                                        } else if (proporcao > 0.8862) {
                                            if (perimetro <= 0.1486) {
                                                Dermosan();
                                            } else if (perimetro > 0.1486) {
                                                if (eixoMenor <= 0.168) {
                                                    Sira();
                                                } else if (eixoMenor <= 0.168) {
                                                    Dermosan();
                                                }
                                            }
                                        }
                                    }


                                } else if (compacteness > 0.4759) {
                                    Sira();
                                }

                            } else if (compacteness > 0.4803) {
                                Dermosan();
                            }
                        }
                    }
                }
            }

        } else if (eixoMenor > 0.1908) {
            if (compacteness <= 0.6077) {
                if (solidez <= 0.9387) {
                    if (perimetro <= 0.1518) {
                        if (compacteness <= 0.6052) {
                            if (proporcao <= 0.2605) {
                                Sira();
                            } else if (proporcao > 0.2605) {
                                if (perimetro <= 0.2622) {
                                    Dermosan();
                                } else if (perimetro > 0.2622) {
                                    if (compacteness <= 0.5751) {
                                        if (solidez <= 0.9315) {
                                            if (solidez <= 0.9285) {
                                                Dermosan();
                                            } else if (solidez > 0.9285) {
                                                Sira();
                                            }
                                        } else if (solidez > 0.9315) {
                                            Dermosan();
                                        }
                                    } else if (compacteness > 0.5751) {
                                        Sira();
                                    }
                                }
                            }

                        } if (compacteness > 0.6052) {
                            Dermosan();
                        }

                    } else if (perimetro > 0.1518) {
                        if (compacteness <= 0.5961) {
                            if (compacteness <= 0.5183) {
                                Dermosan();
                            } else if (compacteness > 0.5183) {
                                if (solidez <= 0.9218) {
                                    if (perimetro <= 0.1621) {
                                        if (perimetro <= 0.1604) {
                                            if (compacteness <= 0.5421) {
                                                if (compacteness <= 0.5338) {
                                                    Sira();
                                                } else if (compacteness > 0.5338) {
                                                    Dermosan();
                                                }
                                            } else if (compacteness > 0.5421) {
                                                Sira();
                                            }
                                        } else if (perimetro > 0.1604) {
                                            Dermosan();
                                        }
                                    } else if (perimetro > 0.1621) {
                                        Sira();
                                    }
                                } else if (solidez > 0.9218) {
                                    Sira();
                                }

                            }

                        } else if (compacteness > 0.5961) {
                            if (compacteness <= 0.6006) {
                                Seker();
                            } else if (compacteness > 0.6006) {
                                Sira();
                            }

                        }
                    }

                } else if (solidez > 0.9387) {
                    if (solidez <= 0.9668) {
                        if (eixoMenor <= 0.2064) {
                            if (eixoPrincipal <= 0.1545) {
                                if (eixoPrincipal <= 0.1487) {
                                    if (compacteness <= 0.6012) {
                                        Seker();
                                    } else if (compacteness <= 0.6012) {
                                        Dermosan();
                                    }
                                } else if (eixoPrincipal > 0.1487) {
                                    Sira();
                                }
                            } else if (eixoPrincipal > 0.1545) {
                                if (eixoPrincipal <= 0.1673) {
                                    if (compacteness <= 0.5559) {
                                        Dermosan();
                                    } else if (compacteness > 0.5559) {
                                        if (eixoMenor <= 0.2047) {
                                            if (eixoPrincipal <= 0.1569) {
                                                Sira();
                                            } else if (eixoPrincipal > 0.1569) {
                                                Dermosan();
                                            }
                                        } else if (eixoMenor > 0.2047) {
                                            Dermosan();
                                        }
                                    }
                                } else if (eixoPrincipal <= 0.1673) {
                                    if (solidez <= 0.9547) {
                                        Dermosan();
                                    } else if (solidez > 0.9547) {
                                        Sira();
                                    }
                                }

                            }

                        } else if (eixoMenor > 0.2064) {
                            if (perimetro <= 0.1507) {
                                Seker();
                            } else if (perimetro > 0.1507) {
                                if (eixoMenor < 0.2201) {
                                    if (eixoPrincipal <= 0.1639) {
                                        Dermosan();
                                    } else if (eixoPrincipal > 0.163) {
                                        if (solidez <= 0.947) {
                                            Sira();
                                        } else if (solidez >= 0.947) {
                                            Seker();
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }

};
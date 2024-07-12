/* eslint-disable max-len */

export const invoiceData = {
  'report_dict': {
    'coverpage_dict': {
      'project_info': {
        'a_b_option': 'NA',
        'system_units': {
          'Volume Flow': 'gpm',
          'Pressure': 'atm',
          'Temperature': '°C',
          'Liquid Volume': 'gal',
          'Flux': 'gfd',
          'Power': 'kW'
        },
        'datatime created': '15/05/2023',
        'project name': '3pass_RO_EDI',
        'engineer': '',
        'location': 'standard flowsheet',
        'phone': '',
        'notes': ''
      },
      'spec_flow': {
        'type': 'Feed_1',
        'flow_rate': '600.0 gpm'
      },
      'version': {
        'prog_version': 'NA',
        'prog_last_update': 'NA',
        'db_version': 'NA',
        'db_last_update': 'NA'
      },
      'flow_bal': {
        'unit id (stream no.)': {
          '0': '-',
          'incoming_feeds': [
            'Feed_1 (1)'
          ],
          'product': [
            'Product_1 (11)'
          ],
          'waste': [
            'Waste_1 (16)',
            'Waste_2 (14)',
            'Waste_3 (15)'
          ]
        },
        'flow': {
          '0': 'gpm',
          'incoming_feeds': [
            600
          ],
          'product': [
            176.4294966785078
          ],
          'waste': [
            416.39351975321324,
            2.800012328067487,
            4.578996495306529
          ]
        },
        'flow-total': {
          '0': 'gpm',
          'incoming_feeds': 600,
          'product': 176.4294966785078,
          'waste': 423.77252857658726
        },
        'flowsheet_recovery': 29.404916113084635
      },
      'flow_summary': {
        'Type': [
          'RO_HP',
          'EDI'
        ],
        'ID': {
          'RO_HP': [
            'RO-HP_1',
            'RO-HP_2',
            'RO-HP_3'
          ],
          'EDI': [
            'EDI_1'
          ]
        },
        'Recovery': {
          'RO-HP_1': 36.57,
          'RO-HP_2': 78.87,
          'RO-HP_3': 87.5,
          'EDI_1': 95.99540167391497
        },
        'Feed': {
          'RO-HP_1': 656.2776716116553,
          'RO-HP_2': 266.3023046636243,
          'RO-HP_3': 210.0257868480205,
          'EDI_1': 183.78952908371377
        },
        'Product': {
          'RO-HP_1': 240.0587847540137,
          'RO-HP_2': 210.0257868480205,
          'RO-HP_3': 183.78918930345006,
          'EDI_1': 176.4294966785078
        },
        'Waste': {
          'RO-HP_1': 416.39351975321324,
          'RO-HP_2': 56.27654295999741,
          'RO-HP_3': 26.236597710215086,
          'EDI_1': 4.578996495306529
        },
        'Electrode': {
          'EDI_1': 2.800012328067487
        }
      }
    },
    'flowsheet_config_dict': {
      'source': {
        'Feed': 1
      },
      'sink': {
        'Waste': 3,
        'Product': 1
      },
      'mixer_splitter': {
        'Mix only': 2
      },
      'unit_op': {
        'CF': 1,
        'RO_HP': 3,
        'EDI': 1
      },
      'pump': {
        'HP Pump (Wired)': 3
      }
    },
    'feed_product_waste_summary': {
      'Category': {
        '0': 'Information',
        '2': 'Ion Concentration',
        '3': 'Stream Property',
        '4': 'Saturation Data'
      },
      'Feed_1': {
        'Information': '',
        'Ion Concentration': {
          'Ca++': 408,
          'Mg++': 1298,
          'Na+': 10779.9,
          'K+': 396,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2702,
          'Cl-': 19361,
          'F-': 0,
          'NO3-': 0,
          'Br-': 67,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 5,
          'H2S': 0,
          'HCO3-': 176.02,
          'CO2': 1.05,
          'CO3--': 3.25,
          'tds': 35196.18
        },
        'Stream Property': {
          'Flow': 600,
          'Pressure': 0.5,
          'Temperature': 30,
          'pH': 8,
          'Alkalinity': 150,
          'Conductivity at 25°C': '51660',
          'Hardness': 0,
          'Density': 1019.8,
          'Ionic Strength': 0,
          'Osm.Pressure': 25.53
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '21.88',
          'Mg(OH)2': '0.19',
          'SiO2': '3.90',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '0.76',
          'S&DI': '0.38'
        }
      },
      'Waste_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 589.0367233418734,
          'Mg++': 1873.950211180078,
          'Na+': 15562.353907313487,
          'K+': 571.6639599972299,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 3900.9441110226126,
          'Cl-': 27950.589000556134,
          'F-': 0,
          'NO3-': 0,
          'Br-': 96.719110625045,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 7.218239294113116,
          'H2S': 0,
          'HCO3-': 253.5759389694382,
          'CO2': 1.3393865459042327,
          'CO3--': 4.986880470072987,
          'tds': 50811.03808277009
        },
        'Stream Property': {
          'Flow': 416.39351975321324,
          'Pressure': 42.38887095809981,
          'Temperature': 30,
          'pH': 7.965440769582698,
          'Alkalinity': 216.5281964272701,
          'Conductivity at 25°C': '70962',
          'Hardness': 9187.855143669978,
          'Density': 1030.2339548270754,
          'Ionic Strength': 1.0287962644151458,
          'Osm.Pressure': 37.45
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '34.36',
          'Mg(OH)2': '0.24',
          'SiO2': '5.64',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '0.98',
          'S&DI': '0.50'
        }
      },
      'Product_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 1.0330939300427152e-8,
          'Mg++': 2.038033650604239e-8,
          'Na+': 0.0006529300132269384,
          'K+': 0.00005163056533613947,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 1.9467403770197766e-8,
          'Cl-': 0.0010507120731355062,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.00002381215990325117,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 2.1948460231023436e-7,
          'H2S': 0,
          'HCO3-': 0.0034712755783439177,
          'CO2': 0.0008145046328061161,
          'CO3--': 0.0000011475710707244964,
          'tds': 0.005251777624298365
        },
        'Stream Property': {
          'Flow': 176.4294966785078,
          'Pressure': 3.352399138087014,
          'Temperature': 30,
          'pH': 6.814283614986694,
          'Alkalinity': -0.000037926295466515684,
          'Conductivity at 25°C': '0.0',
          'Hardness': 1.0969384068390638e-7,
          'Density': 995.6225072541957,
          'Ionic Strength': 1.8299539418835583e-7,
          'Osm.Pressure': 0
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '0.00',
          'Mg(OH)2': '0.00',
          'SiO2': '0.00',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '-14.79',
          'S&DI': '0.00'
        }
      },
      'Waste_2': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 0.000006798193848790494,
          'Mg++': 0.000013411121122929175,
          'Na+': 0.4296554911929974,
          'K+': 0.03397508991880405,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.0000068655043962899496,
          'Cl-': 0.3705511244591328,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.008397755059213495,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.00001463230682068228,
          'H2S': 0,
          'HCO3-': 0.5973832463728858,
          'CO2': 0.7396268510447638,
          'CO3--': 0.000037769708452313555,
          'tds': 1.4400421838376745
        },
        'Stream Property': {
          'Flow': 2.800012328067487,
          'Pressure': 4.046385393535652,
          'Temperature': 30,
          'pH': 6.089932829937603,
          'Alkalinity': 0.4502131287928097,
          'Conductivity at 25°C': '2.5',
          'Hardness': 0.00007218317437570306,
          'Density': 995.6230999296022,
          'Ionic Strength': 0.000020460661886251845,
          'Osm.Pressure': 0
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '0.00',
          'Mg(OH)2': '0.00',
          'SiO2': '0.00',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '-10.47',
          'S&DI': '0.00'
        }
      },
      'Waste_3': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 0.0001416961431023025,
          'Mg++': 0.00027953073714351035,
          'Na+': 8.955397171500875,
          'K+': 0.7081497394936694,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.00027064444855375843,
          'Cl-': 14.60746347994643,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.3310471679718934,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.00056996074446212,
          'H2S': 0,
          'HCO3-': 1.1404527859918563,
          'CO2': 45.32074507599705,
          'CO3--': 0.0000023369325232802226,
          'tds': 25.74377451391051
        },
        'Stream Property': {
          'Flow': 4.578996495306529,
          'Pressure': 2.368615840118431,
          'Temperature': 30,
          'pH': 4.5744184951121145,
          'Alkalinity': -0.4252007968200471,
          'Conductivity at 25°C': '62',
          'Hardness': 0.0015045286488466069,
          'Density': 995.6398475936529,
          'Ionic Strength': 0.00043679723210963853,
          'Osm.Pressure': 0.05
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '0.00',
          'Mg(OH)2': '0.00',
          'SiO2': '0.00',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '-10.43',
          'S&DI': '0.00'
        }
      },
      'Parameter': {
        'Information': 'Water Source',
        'Ion Concentration': [
          'Ca++',
          'Mg++',
          'Na+',
          'K+',
          'NH4+',
          'Ba++',
          'Sr++',
          'Fe++',
          'Mn++',
          'SO4--',
          'Cl-',
          'F-',
          'NO3-',
          'Br-',
          'PO4---',
          'B-',
          'SiO2',
          'H2S',
          'HCO3-',
          'CO2',
          'CO3--',
          'tds'
        ],
        'Stream Property': [
          'Flow',
          'Pressure',
          'Temperature',
          'pH',
          'Alkalinity',
          'Conductivity at 25°C',
          'Hardness',
          'Density',
          'Ionic Strength',
          'Osm.Pressure'
        ],
        'Saturation Data': [
          'BaSO4',
          'CaF2',
          'CaSO4',
          'Mg(OH)2',
          'SiO2',
          'SrSO4',
          'Struvite',
          'LSI',
          'S&DI'
        ]
      },
      'Units': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 'mg/L',
          'Mg++': 'mg/L',
          'Na+': 'mg/L',
          'K+': 'mg/L',
          'NH4+': 'mg/L',
          'Ba++': 'mg/L',
          'Sr++': 'mg/L',
          'Fe++': 'mg/L',
          'Mn++': 'mg/L',
          'SO4--': 'mg/L',
          'Cl-': 'mg/L',
          'F-': 'mg/L',
          'NO3-': 'mg/L',
          'Br-': 'mg/L',
          'PO4---': 'mg/L',
          'B-': 'mg/L',
          'SiO2': 'mg/L',
          'H2S': 'mg/L',
          'HCO3-': 'mg/L',
          'CO2': 'mg/L',
          'CO3--': 'mg/L',
          'tds': 'mg/L'
        },
        'Stream Property': {
          'Flow': 'gpm',
          'Pressure': 'atm',
          'Temperature': '°C',
          'pH': '-',
          'Alkalinity': 'ppm as CaCO3',
          'Conductivity at 25°C': 'µS/cm',
          'Hardness': 'ppm as CaCO3',
          'Density': 'kg/m3',
          'Ionic Strength': '-',
          'Osm.Pressure': 'atm'
        },
        'Saturation Data': {
          'BaSO4': '%',
          'CaF2': '%',
          'CaSO4': '%',
          'Mg(OH)2': '%',
          'SiO2': '%',
          'SrSO4': '%',
          'Struvite': '%',
          'LSI': '-',
          'S&DI': '-'
        }
      },
      'Unit ID': [
        'Feed_1',
        'Waste_1',
        'Product_1',
        'Waste_2',
        'Waste_3'
      ]
    },
    'edi_summary': {
      'system_summary': {
        'units': {
          'Upstream unit': '-',
          'Downstream unit': '-',
          'Feed Flow': 'gpm',
          'Product Flow': 'gpm',
          'Concentrate Flow': 'gpm',
          'Electrode Bleed Flow': 'gpm',
          'EDI Unit Recovery': '%',
          'Flow Per EDI Stack': 'gpm',
          'Number of EDI Stack': 'no.',
          'Feed Temperature': '°C',
          'Feed Pressure': 'atm',
          'Concentrate Pressure': 'atm',
          'Product Outlet Pressure': 'atm',
          'Current': 'Amps',
          'Voltage': 'Volts',
          'AC Power': 'KWh',
          'Co-Current Flow': 'Yes/No',
          'Feed TDS': 'mg/L',
          'Feed pH': '-',
          'Product Resistivity': 'MOhm.cm',
          'Product pH': '-',
          'Concentrate TDS': 'mg/L',
          'Concentrate pH': '-',
          'Electrode Bleed TDS': 'mg/L',
          'Electrode Bleed pH': '-'
        },
        'EDI_1': {
          'Upstream unit': 'RO-HP_3',
          'Downstream unit': 'Product_1, Waste_3, Waste_2, ',
          'Feed Flow': 183.78918930345006,
          'Product Flow': 176.4294966785078,
          'Concentrate Flow': 4.578996495306529,
          'Electrode Bleed Flow': 2.800012328067487,
          'EDI Unit Recovery': 95.99540167391497,
          'Flow Per EDI Stack': 25.000077825328898,
          'Number of EDI Stack': 8,
          'Feed Temperature': 30,
          'Feed Pressure': 5.44,
          'Concentrate Pressure': 2.368615840118431,
          'Product Outlet Pressure': 3.352399138087014,
          'Current': 5.078405818024496,
          'Voltage': 35.50428259820083,
          'AC Power': 0.25757879330212713,
          'Co-Current Flow': 'No',
          'Feed TDS': 0.005251777624298365,
          'Feed pH': 6.814283614986694,
          'Product Resistivity': 16,
          'Product pH': 0.8277632642402957,
          'Concentrate TDS': 25.74377451391051,
          'Concentrate pH': 4.5744184951121145,
          'Electrode Bleed TDS': 1.4400421838376745,
          'Electrode Bleed pH': 6.089932829937603
        },
        'EDI Unit ID': [
          'EDI_1'
        ]
      },
      'Total No.of EDI  Unitop': 1,
      'ventil_summary': {
        'units': {
          'Electrode Gas Generation': {
            'H2': 'ml/min',
            'C2': 'ml/min',
            '-': 'kg/h'
          },
          'Blower/Ventilation Sizing for H2': {
            'Explosion limit of H2 in Air': '%',
            'Design Safety Factor': '%',
            'Ventilation Blower/Fan': 'cmh',
            'Size': 'cfm'
          },
          'Blower/Ventilation Sizing for Cl2': {
            'Explosion limit of Cl2 in Air': '%',
            'Design Safety Factor': '%',
            'Ventilation Blower/Fan': 'cmh',
            'Size': 'cfm'
          }
        },
        'EDI_1': {
          'Electrode Gas Generation': {
            'H2': 38.647,
            'C2': '<0.0259',
            '-': '<0.000111'
          },
          'Blower/Ventilation Sizing for H2': {
            'Explosion limit of H2 in Air': 4,
            'Design Safety Factor': 100,
            'Ventilation Blower/Fan': 0.47,
            'Size': 0.28
          },
          'Blower/Ventilation Sizing for Cl2': {
            'Explosion limit of Cl2 in Air': 0.00005,
            'Design Safety Factor': 100,
            'Ventilation Blower/Fan': 25.46,
            'Size': 14.99
          }
        }
      },
      'design_summary': {
        'Category': {
          '0': 'Input Parameters',
          '2': 'Feedwater Parameters',
          '3': 'Calculated Output Parameters'
        },
        'Parameter': {
          'Input Parameters': {
            'EDI_1': {
              'Stack Model': 'MK-7',
              'Target Resistivity': '16 (O.K.)',
              'Product Flow': '176.4294966785078 (O.K.)',
              'Flow per stack': '25.000077825328898 (O.K.)',
              'Target Silica guarantee': '5 (O.K.)',
              'Rectifier efficiency': '70 (O.K.)',
              'Rectifier DC output': '400 (O.K.)',
              'Co-Current Flow': 'No'
            }
          },
          'Feedwater Parameters': {
            'EDI_1': {
              'Temperature': '30.0 (O.K.)',
              'TEA': '2.1234602646748044 (O.K.)',
              'TEC': '0.6911256331854235 (O.K.)',
              'pH': '5.473398186084063 (O.K.)',
              'Alkalinity': '0.16424925292942455 (O.K.)',
              'Hardness': '0.0 (O.K.)',
              'Fe++': '0.0 (O.K.)',
              'Mn++': '0.0 (O.K.)',
              'B': '0.0 (O.K.)',
              'Silica': '0.014632306820682279 (O.K.)',
              'Cond': '2.7 (O.K.)',
              'Charge Balance': '2.0 (O.K.)'
            }
          },
          'Calculated Output Parameters': {
            'EDI_1': {
              'Product Flow Rate': 176.4294966785078,
              'Product Resistivity': 16,
              'Product Silica guarantee level': 5,
              'Predicted Silica product': 0.00021948460231023436,
              'Predicted Boron product': 'NA',
              'Product Sodium guarantee level': 1.37471310335234,
              'Product Chloride guarantee level': 2.12183978995688,
              'Product Sulfate guarantee level': 2.7431346135543357,
              'Maximum Allowable Recovery': 95.99540167391497,
              'Current': 5.078405818024496,
              'Voltage': 35.50428259820083,
              'E-Factor': 5.122327976005685,
              'DC power': 0.180305155311489,
              'AC power consumption': 0.25757879330212713,
              'AC energy': 0.024332659054580784,
              'Feed pressure': 5.436853565596081,
              'Predicted Product outlet pressure': 3.352399138087014,
              'Feed Inlet': 183.78952908371377,
              'Concentrate Outlet': 4.578996495306529,
              'Electrode Bleed': 2.800012328067487
            }
          }
        },
        'Units': {
          'Input Parameters': {
            'Stack Model': '-',
            'Target Resistivity': 'MOhm.cm',
            'Product Flow': 'gpm',
            'Flow per stack': 'gpm',
            'Target Silica guarantee': 'ppb SiO2',
            'Rectifier efficiency': '%',
            'Rectifier DC output': 'Volts',
            'Co-Current Flow': 'Yes/No'
          },
          'Feedwater Parameters': {
            'Temperature': '°C',
            'TEA': 'ppm as CaCO3',
            'TEC': 'ppm as CaCO3',
            'pH': '-',
            'Alkalinity': 'ppm as CaCO3',
            'Hardness': 'ppm as CaCO3',
            'Fe++': 'ppm as ion',
            'Mn++': 'ppm as ion',
            'B': 'ppm as ion',
            'Silica': 'ppb SiO2',
            'Cond': 'µS/cm @ 25°C',
            'Charge Balance': '-'
          },
          'Calculated Output Parameters': {
            'Product Flow Rate': 'gpm',
            'Product Resistivity': 'MOhm.cm',
            'Product Silica guarantee level': 'ppb SiO2',
            'Predicted Silica product': 'ppb SiO2',
            'Predicted Boron product': 'ppb B',
            'Product Sodium guarantee level': 'ppb Na',
            'Product Chloride guarantee level': 'ppb Cl',
            'Product Sulfate guarantee level': 'ppb SO4',
            'Maximum Allowable Recovery': '%',
            'of E-cell Stacks': '-',
            'Current': 'Amps',
            'Voltage': 'Volts',
            'E-Factor': '-',
            'DC power': 'kW',
            'AC power consumption': 'kW',
            'AC energy': 'kWh/m3',
            'Feed pressure': 'atm',
            'Predicted Product outlet pressure': 'atm',
            'Feed Inlet': 'gpm',
            'Concentrate Outlet': 'gpm',
            'Electrode Bleed': 'gpm'
          }
        }
      }
    },
    'cf_summary': {
      'units': {
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Feed Temperature': '°C',
        'Flow Capacity': 'gpm',
        'Filter Type': '-',
        'Number of Filters': 'No.',
        'Design Flow Per TIE': 'gpm',
        'Actual Flow per TIE': 'gpm',
        'Inlet Pressure': 'atm',
        'Outlet Pressure': 'atm',
        'Pressure Drop': 'atm'
      },
      'CF_1': {
        'Upstream unit': 'Feed_1',
        'Downstream unit': 'MixSplit_1, ',
        'Feed Temperature': 30,
        'Flow Capacity': 600,
        'Filter Type': 'RO.Zs 05-20',
        'Number of Filters': 60,
        'Design Flow Per TIE': 4.999999999999991,
        'Actual Flow per TIE': 4.999999999999991,
        'Inlet Pressure': 0,
        'Outlet Pressure': 0,
        'Pressure Drop': 0.07708021935501543
      },
      'CF Unit ID': [
        'CF_1'
      ],
      'cf_nos': 1
    },
    'pump_summary': {
      'units': {
        'RO Unit Attached': '-',
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Feed Temperature': '°C',
        'Flow Rate': 'gpm',
        'Inlet Pressure': 'atm',
        'Discharge Pressure': 'atm',
        'Power Consumption': 'kW',
        'Pump Efficiency': '%',
        'Motor Efficiency': '%',
        'VFD Efficiency': '%'
      },
      'Total Pump Consumption (kW)': 303.6633408195751,
      'HP_Pump_1': {
        'RO Unit Attached': 'RO-HP_1, ',
        'Upstream unit': 'MixSplit_1',
        'Downstream unit': 'RO-HP_1, ',
        'Feed Temperature': 30.000000000000004,
        'Flow Rate': 656.2776716116553,
        'Inlet Pressure': 0.4229197806449846,
        'Discharge Pressure': 43.18249342537979,
        'Power Consumption': 255.32916831176146,
        'Combined Efficiency': 70.25831081097002,
        'Pump Efficiency': 75.44921693617914,
        'Motor Efficiency': 96,
        'VFD Efficiency': 97
      },
      'HP_Pump_2': {
        'RO Unit Attached': 'RO-HP_2, ',
        'Upstream unit': 'MixSplit_2',
        'Downstream unit': 'RO-HP_2, ',
        'Feed Temperature': 30,
        'Flow Rate': 266.3023046636243,
        'Inlet Pressure': 0,
        'Discharge Pressure': 9.357401797773557,
        'Power Consumption': 24.284779947661722,
        'Combined Efficiency': 65.5953676147421,
        'Pump Efficiency': 70.44176075466291,
        'Motor Efficiency': 96,
        'VFD Efficiency': 97
      },
      'HP_Pump_3': {
        'RO Unit Attached': 'RO-HP_3, ',
        'Upstream unit': 'RO-HP_2',
        'Downstream unit': 'RO-HP_3, ',
        'Feed Temperature': 30,
        'Flow Rate': 210.0257868480205,
        'Inlet Pressure': 0,
        'Discharge Pressure': 11.529875821113722,
        'Power Consumption': 24.049392560151944,
        'Combined Efficiency': 64.3680390522587,
        'Pump Efficiency': 69.12375327776923,
        'Motor Efficiency': 96,
        'VFD Efficiency': 97
      },
      'Pump Unit ID': [
        'HP_Pump_1',
        'HP_Pump_2',
        'HP_Pump_3'
      ],
      'pump_nos': 3
    },
    'chem_dose_summary': {
      'units': {
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Chemical': '-',
        'Supplied Form': '-',
        'Dosing Endpoint': '-',
        'Target Value': '-',
        'Dosage Rate': 'mg/L',
        'Mass Flow Rate': 'kg/day',
        'Concentration as Metered': '%',
        'Specific Gravity as Metered': '-',
        'Metered Flow Rate': 'm3/hr',
        'Avg Cons.As Metered': 'm3/hr',
        'Avg Cons.As Supplied': 'm3/hr',
        'Avg Cons.As Supplied with SF': 'm3/hr'
      },
      'chem_dose_nos': 2,
      'Chem_Dose_1': {
        'Upstream unit': 'Feed_1',
        'Downstream unit': 'Stripper_1, ',
        'Chemical': 'Sulfuric Acid',
        'Supplied Form': 'Sulfuric Acid - 96%',
        'Dosing Endpoint': 'Target pH',
        'Target Value': 'pH 5',
        'Dosage Rate': 28.724310349796426,
        'Mass Flow Rate': 35.90538796596985,
        'Concentration as Metered': 96,
        'Specific Gravity as Metered': 1.8355,
        'Concentration as Supplied': 96,
        'Specific Gravity as Supplied': 1.8355,
        'Metered Flow Rate': 0.0008150682821658454,
        'Avg Cons.As Metered': 0.0008150682821658454,
        'Avg Cons.As Supplied': 0.0008150682821658454,
        'Avg Cons.As Supplied with SF': 0.0008965751103824301
      },
      'Chem_Dose_2': {
        'Upstream unit': 'Stripper_1',
        'Downstream unit': 'CF_1, ',
        'Chemical': 'Caustic Soda',
        'Supplied Form': 'Caustic Soda - 48%',
        'Dosing Endpoint': 'Target pH',
        'Target Value': 'pH 7.5',
        'Dosage Rate': 1.3606493735090457,
        'Mass Flow Rate': 3.4016234364939133,
        'Concentration as Metered': 48,
        'Specific Gravity as Metered': 1.5,
        'Concentration as Supplied': 48,
        'Specific Gravity as Supplied': 1.5,
        'Metered Flow Rate': 0.00009448953990260865,
        'Avg Cons.As Metered': 0.00009448953990260863,
        'Avg Cons.As Supplied': 0.00009448953990260863,
        'Avg Cons.As Supplied with SF': 0.0001039384938928695
      },
      'Chemical Dosing Unit ID': [
        'Chem_Dose_1',
        'Chem_Dose_2'
      ],
      'agg_chem_dose_dict': {
        'Sulfuric Acid - 96%': {
          'Chemical Dosing Unit ID': '-Chem_Dose_1, ',
          'Chemical': 'Sulfuric Acid',
          'Supplied Form': 'Sulfuric Acid - 96%',
          'Concentration as Supplied': 96,
          'Specific Gravity as Supplied': 1.8355,
          'Tot.Cons Mass Flow Rate': 0.0008150682821658454,
          'Tot.Cons As Supplied': 0.0008150682821658454,
          'Tot.Cons As Supplied with SF': 0.0008965751103824301
        },
        'Caustic Soda - 48%': {
          'Chemical Dosing Unit ID': '-Chem_Dose_2, ',
          'Chemical': 'Caustic Soda',
          'Supplied Form': 'Caustic Soda - 48%',
          'Concentration as Supplied': 48,
          'Specific Gravity as Supplied': 1.5,
          'Tot.Cons Mass Flow Rate': 0.00009448953990260865,
          'Tot.Cons As Supplied': 0.00009448953990260863,
          'Tot.Cons As Supplied with SF': 0.0001039384938928695
        },
        'units': {
          'Chemical Dosing Unit ID': '-',
          'Chemical': '-',
          'Supplied Form': '-',
          'Concentration as Supplied': '%',
          'Specific Gravity as Supplied': '-',
          'Tot.Cons Mass Flow Rate': 'kg/day',
          'Tot.Cons As Supplied': 'm3/hr',
          'Tot.Cons As Supplied with SF': 'm3/hr'
        }
      }
    },
    'stripper_summary': {
      'units': {
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Feed Temperature': '°C',
        'Flow Capacity': 'm3/hr',
        'Outlet CO2 Concentration': 'mg/L',
        'Outlet H2S Concentration': 'mg/L',
        'Outlet NH3 Concentration': 'mg/L'
      },
      'Stripper_1': {
        'Upstream unit': 'Chem_Dose_1',
        'Downstream unit': 'Chem_Dose_2, ',
        'Feed Temperature': 25,
        'Flow Capacity': 50.00000003999996,
        'Outlet CO2 Concentration': 1,
        'Outlet H2S Concentration': 0.5,
        'Outlet NH3 Concentration': 0
      },
      'Stripper Unit ID': [
        'Stripper_1'
      ]
    },
    'erd_summary': { 'units': { 'ERD Type': '-', 'RO Unit Attached': '-', 'Installed Location': '-', 'LP Discharge Pressure': 'kPa', 'Net Transfer Efficiency': '%', 'Boost Pressure': 'kPa', 'Power Saving': 'kW', 'Leakage (Reject in HP OUT)': '%', 'Mixing at Membrane Feed': '%', 'Circulation Pump': 'kW', 'HP Pump': 'kW', 'Energy Recovered': 'kW', 'Total Power Consumption': 'kW' }, 'PW_1': { 'ERD Type': 'Pelton Wheel', 'RO Unit Attached': 'RO_PW_1', 'Installed Location': 'In front of 1st Stage', 'LP Discharge Pressure': 205.68974999999995, 'Net Transfer Efficiency': 53.400000000000006, 'Boost Pressure': '-', 'Power Saving': 1871.128036919391, 'Leakage (Reject in HP OUT)': '-', 'Mixing at Membrane Feed': '-', 'Circulation Pump': '-', 'HP Pump': 5691.814000316133, 'Energy Recovered': 1620.2474308967546, 'Total Power Consumption': 4241.215176478519 }, 'ERD Unit ID': ['PW_1'], 'erd_nos': 1 },
    'ro_summary': {
      'ro_system_dict': {
        'units': {
          'Upstream unit': '-',
          'Downstream unit': '-',
          'Feed Flow': 'gpm',
          'Product Flow': 'gpm',
          'Concentrate Flow': 'gpm',
          'RO Unit Recovery': '%',
          'Average Flux': 'gfd',
          'Breakdown by Stage': 'gfd',
          'Interstage Pressure': 'atm',
          'Total Membrane Area': 'm2',
          'Feed Temperature': '°C',
          'Feed Pressure': 'atm',
          'Product Pressure *': 'atm',
          'Feed TDS': 'mg/L',
          'Feed pH': '-',
          'Permeate TDS': 'mg/L',
          'Permeate pH': '-',
          'Concentrate TDS': 'mg/L',
          'Concentrate pH': '-'
        },
        'RO-HP_1': {
          'Upstream unit': 'HP_Pump_1',
          'Downstream unit': 'MixSplit_2, Waste_1, ',
          'Feed Flow': 656.2776716116553,
          'Product Flow': 240.0587847540137,
          'Concentrate Flow': 416.39351975321324,
          'RO Unit Recovery': 36.57,
          'Average Flux': 8.816908934890861,
          'Breakdown by Stage': '8.819041159777672, ',
          'Interstage Pressure': '43.18249342537979, ',
          'Total Membrane Area': 3641.560832000007,
          'Feed Temperature': 30,
          'Feed Pressure': 43.18249342537979,
          'Product Pressure *': 0,
          'Feed TDS': 32311.99728699949,
          'Feed pH': 7.982346906700747,
          'Permeate TDS': 195.63758178611965,
          'Permeate pH': 6.388845838456012,
          'Concentrate TDS': 50811.03808277009,
          'Concentrate pH': 7.965440769582698
        },
        'RO-HP_2': {
          'Upstream unit': 'HP_Pump_2',
          'Downstream unit': 'HP_Pump_3, MixSplit_1, ',
          'Feed Flow': 266.3023046636243,
          'Product Flow': 210.0257868480205,
          'Concentrate Flow': 56.27654295999741,
          'RO Unit Recovery': 78.87,
          'Average Flux': 19.095077345715197,
          'Breakdown by Stage': '20.309615264919337, 16.664135707441318, ',
          'Interstage Pressure': '9.357401797773557, 7.979629988268845, ',
          'Total Membrane Area': 1471.4878464000005,
          'Feed Temperature': 30,
          'Feed Pressure': 9.357401797773557,
          'Product Pressure *': 0,
          'Feed TDS': 177.25147337943264,
          'Feed pH': 6.345909746941109,
          'Permeate TDS': 1.8622511016141168,
          'Permeate pH': 5.497885737710975,
          'Concentrate TDS': 832.3977827495311,
          'Concentrate pH': 6.964916955046793
        },
        'RO-HP_3': {
          'Upstream unit': 'HP_Pump_3',
          'Downstream unit': 'EDI_1, MixSplit_2, ',
          'Feed Flow': 210.0257868480205,
          'Product Flow': 183.78918930345006,
          'Concentrate Flow': 26.236597710215086,
          'RO Unit Recovery': 87.5,
          'Average Flux': 21.481262338500557,
          'Breakdown by Stage': '23.000867771959772, 16.930219633295945, ',
          'Interstage Pressure': '11.529875821113722, 10.043928408432398, ',
          'Total Membrane Area': 1144.4905472000003,
          'Feed Temperature': 30,
          'Feed Pressure': 11.529875821113722,
          'Product Pressure *': 5.44,
          'Feed TDS': 1.8622511016141168,
          'Feed pH': 5.497885737710975,
          'Permeate TDS': 0.8277632642402957,
          'Permeate pH': 5.473398186084063,
          'Concentrate TDS': 9.130106003176301,
          'Concentrate pH': 5.644642457050247
        },
        'ro_nos': 3,
        'RO Unit ID': [
          'RO-HP_1',
          'RO-HP_2',
          'RO-HP_3'
        ]
      },
      'ro_stage_dict': {
        'RO-HP_1': {
          'Stage': {
            '1': {
              'Housing': 14,
              'Elements': 7,
              'Element Type': '-',
              'Flow': 656.2776716116553,
              'Perm.': 240.05878475401363,
              'Conc.': 416.39351975321324,
              '% Recovery': 36.57884385499339,
              'Flux': 8.819041159777672,
              'Feed Pressure': 43.18249342537979,
              'Pressure dp': 0.793622467279981,
              'Feed TDS mg/L': 32310.352747131663,
              'Perm TDS mg/L': 195.6375817862008,
              'Last Elem Beta': 1.0305836081712092
            }
          }
        },
        'RO-HP_2': {
          'Stage': {
            '1': {
              'Housing': 4,
              'Elements': 6,
              'Element Type': '-',
              'Flow': 266.3023046636242,
              'Perm.': 148.9278024975578,
              'Conc.': 117.3745142545687,
              '% Recovery': 55.924338576668994,
              'Flux': 20.309615264919337,
              'Feed Pressure': 9.357401797773557,
              'Pressure dp': 1.3777718095047122,
              'Feed TDS mg/L': 177.25148095103933,
              'Perm TDS mg/L': 1.54057512467713,
              'Last Elem Beta': 1.1182893093472355
            },
            '2': {
              'Housing': 2,
              'Elements': 6,
              'Element Type': '-',
              'Flow': 117.3745142545687,
              'Perm.': 61.09798435515017,
              'Conc.': 56.27654295999741,
              '% Recovery': 52.053876212545845,
              'Flux': 16.664135707441318,
              'Feed Pressure': 7.979629988268845,
              'Pressure dp': 1.2021803803035969,
              'Feed TDS mg/L': 400.3949903879674,
              'Perm TDS mg/L': 2.6466013529472825,
              'Last Elem Beta': 1.0985078921115594
            }
          }
        },
        'RO-HP_3': {
          'Stage': {
            '1': {
              'Housing': 3,
              'Elements': 7,
              'Element Type': '-',
              'Flow': 210.0257868480205,
              'Perm.': 147.57961030360823,
              'Conc.': 62.44617658914527,
              '% Recovery': 70.26737645811096,
              'Flux': 23.000867771959772,
              'Feed Pressure': 11.529875821113722,
              'Pressure dp': 1.4859474126813232,
              'Feed TDS mg/L': 1.8622511016141168,
              'Perm TDS mg/L': 0.7616732760351639,
              'Last Elem Beta': 1.090694892024237
            },
            '2': {
              'Housing': 1,
              'Elements': 7,
              'Element Type': '-',
              'Flow': 62.44617658914527,
              'Perm.': 36.209578998033685,
              'Conc.': 26.236597710215086,
              '% Recovery': 57.98526182998981,
              'Flux': 16.930219633295945,
              'Feed Pressure': 10.043928408432398,
              'Pressure dp': 1.4253628006240504,
              'Feed TDS mg/L': 4.465656762260738,
              'Perm TDS mg/L': 1.0969580522701832,
              'Last Elem Beta': 1.0711694163903487
            }
          }
        }
      }
    },
    'mixer_summary': {
      'MixSplit_1': {
        'Upstream unit': 'CF_1, RO-HP_2, ',
        'Downstream unit': 'HP_Pump_1, ',
        'Inlet Stream ID': [
          2,
          12
        ],
        'Outlet Stream ID': [
          3
        ],
        'Mode': 'Mix only',
        'Split Ratios': 'Na',
        'Mix Ratios': '0.91 : 0.09'
      },
      'MixSplit_2': {
        'Upstream unit': 'RO-HP_3, RO-HP_1, ',
        'Downstream unit': 'HP_Pump_2, ',
        'Inlet Stream ID': [
          13,
          5
        ],
        'Outlet Stream ID': [
          6
        ],
        'Mode': 'Mix only',
        'Split Ratios': 'Na',
        'Mix Ratios': '0.1 : 0.9'
      },
      'mixer_nos': 2,
      'Mixer-Splitter Unit ID': [
        'MixSplit_1',
        'MixSplit_2'
      ],
      'units': {
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Inlet Stream ID': '-',
        'Outlet Stream ID': '-',
        'Mode': '-',
        'Split Ratios': '(user input)',
        'Mix Ratios': '(calculated)'
      }
    },
    'ro_elem_summary': {
      'units': {
        'Flow': {
          'Feed': 'gpm',
          'Permeate': 'gpm'
        },
        'Pressure': {
          'Feed': 'atm',
          'Net Driving': 'atm',
          'Delta Pressure': 'atm',
          'Feed Osm. Pressure': 'atm'
        },
        'Other': {
          'Recovery': '%',
          'Beta (Conc. Pol.)': '',
          'Flux': 'gfd',
          'A-Value': 'µm/(s.atm)'
        },
        'Stream Property': {
          'pH': '',
          'Alkalinity': 'ppm as CaCO3',
          'Conductivity at 25°C': 'µS/cm',
          'Hardness': 'ppm as CaCO3',
          'Density': 'kg/m3',
          'Ionic Strength': ''
        },
        'Permeate Ion Concentration': {
          'Ca++': 'mg/L',
          'Mg++': 'mg/L',
          'Na+': 'mg/L',
          'K+': 'mg/L',
          'NH4+': 'mg/L',
          'Ba++': 'mg/L',
          'Sr++': 'mg/L',
          'Fe++': 'mg/L',
          'Mn++': 'mg/L',
          'SO4--': 'mg/L',
          'Cl-': 'mg/L',
          'F-': 'mg/L',
          'NO3-': 'mg/L',
          'Br-': 'mg/L',
          'PO4---': 'mg/L',
          'B-': 'mg/L',
          'SiO2': 'mg/L',
          'H2S': 'mg/L',
          'HCO3-': 'mg/L',
          'CO2': 'mg/L',
          'CO3--': 'mg/L',
          'TDS': 'mg/L'
        },
        'Saturation Data': {
          'BaSO4': '%',
          'CaF2 ': '%',
          'CaSO4': '%',
          'Mg(OH)2': '%',
          'SiO2 ': '%',
          'SrSO4 ': '%',
          'Struvite ': '%',
          'LSI': '',
          'S&DI': ''
        }
      },
      'RO-HP_1': {
        'Stage 1': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 46.87697654368966,
                'Permeate': 3.9338095144283995
              },
              'Pressure': {
                'Feed': 3.9338095144283995,
                'Net Driving': 16.77354877026309,
                'Delta Pressure': 0.15181370919805473,
                'Feed Osm. Pressure': 23.3856321468719
              },
              'Other': {
                'Recovery': 8.391773114381774,
                'Beta (Conc. Pol.)': 1.0782640958009875,
                'Flux': 14.159096797406212,
                'A-Value': 3.912369378969392
              },
              'Stream Property': {
                'pH': 6.151050837938885,
                'Alkalinity': 0.00001600900331657722,
                'Conductivity at 25°C': 201.43851777920744,
                'Hardness': 3.7200998811985038,
                'Density': 995.6901763339945,
                'Ionic Strength': 0.0016826706215607122
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.2895031707542249,
                'Mg++': 0.727817323293635,
                'Na+': 34.550532046112636,
                'K+': 1.883922583389291,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 1.150874596021432,
                'Cl-': 56.07710063966579,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.29904871228973096,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.01706516170380092,
                'H2S': 0,
                'HCO3-': 1.0159317848799716,
                'CO2': 1.046526118435291,
                'CO3--': 0.0000835074211188502,
                'TDS': 96.01187952553163
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '21.86',
                'Mg(OH)2': '0.17',
                'SiO2 ': '3.91',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '0.75',
                'S&DI': '0.36'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 42.94520204392503,
                'Permeate': 3.3894341753472528
              },
              'Pressure': {
                'Feed': 3.3894341753472528,
                'Net Driving': 14.445751996082121,
                'Delta Pressure': 0.1344662980984903,
                'Feed Osm. Pressure': 25.583707879536018
              },
              'Other': {
                'Recovery': 7.892462985458739,
                'Beta (Conc. Pol.)': 1.0737729837218095,
                'Flux': 12.204353228657219,
                'A-Value': 3.915650043808679
              },
              'Stream Property': {
                'pH': 6.223483927162188,
                'Alkalinity': 0.00002034686745908553,
                'Conductivity at 25°C': 255.09284622264326,
                'Hardness': 4.6894103796376,
                'Density': 995.7086166112838,
                'Ionic Strength': 0.0021405366039277942
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.3659780794563255,
                'Mg++': 0.9168258239839662,
                'Na+': 43.9919131984618,
                'K+': 2.39911555016622,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 1.442603040618819,
                'Cl-': 71.385746962304,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.38105686871521405,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.021759354468700767,
                'H2S': 0,
                'HCO3-': 1.272412802885058,
                'CO2': 1.1026276728067779,
                'CO3--': 0.0001255930401236925,
                'TDS': 122.17753727410023
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '24.19',
                'Mg(OH)2': '0.19',
                'SiO2 ': '4.25',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '0.80',
                'S&DI': '0.39'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 39.55782637879415,
                'Permeate': 2.8589802091986365
              },
              'Pressure': {
                'Feed': 2.8589802091986365,
                'Net Driving': 12.176339335314678,
                'Delta Pressure': 0.12018370297688677,
                'Feed Osm. Pressure': 27.842058066330683
              },
              'Other': {
                'Recovery': 7.227344045200766,
                'Beta (Conc. Pol.)': 1.0652119926981305,
                'Flux': 10.294758843746916,
                'A-Value': 3.9185797612120847
              },
              'Stream Property': {
                'pH': 6.304688637818179,
                'Alkalinity': 0.000026194879369446696,
                'Conductivity at 25°C': 327.08316089162474,
                'Hardness': 5.990900225484547,
                'Density': 995.7335115790256,
                'Ionic Strength': 0.0027585878666622106
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.46892989143951913,
                'Mg++': 1.1704436178756932,
                'Na+': 56.7407577742835,
                'K+': 3.0947267958358617,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 1.8322507792578733,
                'Cl-': 92.05542801331835,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.49186334127268183,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.028104986876991925,
                'H2S': 0,
                'HCO3-': 1.6208527413736777,
                'CO2': 1.1565947374774062,
                'CO3--': 0.00019658257950683482,
                'TDS': 157.50355452411367
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '26.53',
                'Mg(OH)2': '0.20',
                'SiO2 ': '4.57',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '0.85',
                'S&DI': '0.42'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 36.700858334074226,
                'Permeate': 2.359399699473133
              },
              'Pressure': {
                'Feed': 2.359399699473133,
                'Net Driving': 10.041794784040347,
                'Delta Pressure': 0.10863808422644948,
                'Feed Osm. Pressure': 30.08498187176192
              },
              'Other': {
                'Recovery': 6.428731660705036,
                'Beta (Conc. Pol.)': 1.0560930944489133,
                'Flux': 8.495784284700148,
                'A-Value': 3.9212216434187495
              },
              'Stream Property': {
                'pH': 6.394165879772902,
                'Alkalinity': 0.00003412556614626985,
                'Conductivity at 25°C': 424.24847056308244,
                'Hardness': 7.751812939541703,
                'Density': 995.7673275837512,
                'Ionic Strength': 0.003598069463351084
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.6085406433421363,
                'Mg++': 1.5133955408848612,
                'Na+': 74.06147511804804,
                'K+': 4.03942851817755,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 2.357031146069684,
                'Cl-': 120.13587183204977,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.6424406823601513,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.03673474580180919,
                'H2S': 0,
                'HCO3-': 2.096135479776305,
                'CO2': 1.2067529411692526,
                'CO3--': 0.00031941201198665964,
                'TDS': 205.4913731185223
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '28.79',
                'Mg(OH)2': '0.21',
                'SiO2 ': '4.89',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '0.89',
                'S&DI': '0.45'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 34.34335245719562,
                'Permeate': 1.9070915405457007
              },
              'Pressure': {
                'Feed': 1.9070915405457007,
                'Net Driving': 8.110577333671468,
                'Delta Pressure': 0.09946770297499108,
                'Feed Osm. Pressure': 32.23069303895051
              },
              'Other': {
                'Recovery': 5.553015078893752,
                'Beta (Conc. Pol.)': 1.046952093618393,
                'Flux': 6.866110474830135,
                'A-Value': 3.923632050131602
              },
              'Stream Property': {
                'pH': 6.490884302069929,
                'Alkalinity': 0.0000448944417752617,
                'Conductivity at 25°C': 555.5804151024405,
                'Hardness': 10.142309827893243,
                'Density': 995.8133379993036,
                'Ionic Strength': 0.004740320998215242
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.7984141074770126,
                'Mg++': 1.9787534436907745,
                'Na+': 97.63251180396827,
                'K+': 5.32399544357657,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 3.066806788460255,
                'Cl-': 158.3483742775144,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.8473159010368101,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.048487800319003634,
                'H2S': 0,
                'HCO3-': 2.744147269467125,
                'CO2': 1.2514872102749393,
                'CO3--': 0.0005361134753926976,
                'TDS': 270.7893429489856
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '30.88',
                'Mg(OH)2': '0.22',
                'SiO2 ': '5.17',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '0.93',
                'S&DI': '0.46'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 32.43797556752741,
                'Permeate': 1.5136668145865828
              },
              'Pressure': {
                'Feed': 1.5136668145865828,
                'Net Driving': 6.430699527483707,
                'Delta Pressure': 0.09229629903410076,
                'Feed Osm. Pressure': 34.20401207654135
              },
              'Other': {
                'Recovery': 4.666341804948718,
                'Beta (Conc. Pol.)': 1.0383122077959743,
                'Flux': 5.447079797697228,
                'A-Value': 3.9258597084714317
              },
              'Stream Property': {
                'pH': 6.593329254796872,
                'Alkalinity': 0.000059475741936476966,
                'Conductivity at 25°C': 732.5697370134624,
                'Hardness': 13.385848860781849,
                'Density': 995.8757963791581,
                'Ionic Strength': 0.006291138298532678
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.056393936612114,
                'Mg++': 2.609960427789617,
                'Na+': 129.63543494936872,
                'K+': 7.065713741945761,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 4.027220570248729,
                'Cl-': 210.23064281157176,
                'F-': 0,
                'NO3-': 0,
                'Br-': 1.1252785708321935,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.06445344431756314,
                'H2S': 0,
                'HCO3-': 3.6238915351501046,
                'CO2': 1.2897121106012168,
                'CO3--': 0.000923259616712975,
                'TDS': 359.43991324745326
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '32.75',
                'Mg(OH)2': '0.23',
                'SiO2 ': '5.42',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '0.96',
                'S&DI': '0.47'
              }
            }
          },
          '6': {
            'Category': {
              'Flow': {
                'Feed': 30.925804786487145,
                'Permeate': 1.1846742303045348
              },
              'Pressure': {
                'Feed': 1.1846742303045348,
                'Net Driving': 5.0244462219408135,
                'Delta Pressure': 0.08675667077101253,
                'Feed Osm. Pressure': 35.95135653584047
              },
              'Other': {
                'Recovery': 3.8306981450719486,
                'Beta (Conc. Pol.)': 1.0305836081712092,
                'Flux': 4.258183644146429,
                'A-Value': 3.927945391867119
              },
              'Stream Property': {
                'pH': 6.699439520201799,
                'Alkalinity': 0.00007904658942659614,
                'Conductivity at 25°C': 968.8207658532516,
                'Hardness': 17.75958253792077,
                'Density': 995.959902601312,
                'Ionic Strength': 0.00838003529526377
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.4045864441406695,
                'Mg++': 3.460913647739766,
                'Na+': 172.73825725039293,
                'K+': 9.406752466588797,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 5.319883022125258,
                'Cl-': 280.1104190173914,
                'F-': 0,
                'NO3-': 0,
                'Br-': 1.4991427838817788,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.08596152776375156,
                'H2S': 0,
                'HCO3-': 4.806474345904871,
                'CO2': 1.321016325834442,
                'CO3--': 0.0016166557489528922,
                'TDS': 478.83400716167813
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '34.36',
                'Mg(OH)2': '0.24',
                'SiO2 ': '5.64',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '0.98',
                'S&DI': '0.50'
              }
            }
          }
        }
      },
      'RO-HP_2': {
        'Stage 1': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 66.57557616590606,
                'Permeate': 6.713136077078649
              },
              'Pressure': {
                'Feed': 6.713136077078649,
                'Net Driving': 9.025716515569368,
                'Delta Pressure': 0.3330262130261615,
                'Feed Osm. Pressure': 0.14475779759657484
              },
              'Other': {
                'Recovery': 10.083481756657338,
                'Beta (Conc. Pol.)': 1.0927310131768326,
                'Flux': 21.971997286457967,
                'A-Value': 11.283455003266928
              },
              'Stream Property': {
                'pH': 5.485691929727148,
                'Alkalinity': 1.6643848441458743e-7,
                'Conductivity at 25°C': 3.567096777866841,
                'Hardness': 0.0034916148812748904,
                'Density': 995.6234051874083,
                'Ionic Strength': 0.000021449344294292905
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0003034835978937411,
                'Mg++': 0.0006638539917102827,
                'Na+': 0.3970798822389929,
                'K+': 0.02732692838743647,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0008116185560562319,
                'Cl-': 0.6276758895407861,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.012265265380669422,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00011938223686881199,
                'H2S': 0,
                'HCO3-': 0.2094480101281764,
                'CO2': 1.0418457961978924,
                'CO3--': 0.000003300166799477853,
                'TDS': 1.2756976142253897
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.02',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-4.84',
                'S&DI': '-5.22'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 59.862440492064536,
                'Permeate': 6.476841946122389
              },
              'Pressure': {
                'Feed': 6.476841946122389,
                'Net Driving': 8.695992452022688,
                'Delta Pressure': 0.2876344531804067,
                'Feed Osm. Pressure': 0.1606209588243074
              },
              'Other': {
                'Recovery': 10.819542091640868,
                'Beta (Conc. Pol.)': 1.0970603595777562,
                'Flux': 21.200019753476962,
                'A-Value': 11.299815823618466
              },
              'Stream Property': {
                'pH': 5.486801145050768,
                'Alkalinity': 2.0387852152583703e-7,
                'Conductivity at 25°C': 3.7492831311976516,
                'Hardness': 0.004053121606882549,
                'Density': 995.6234664595272,
                'Ionic Strength': 0.000022919724440391344
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0003521391226960477,
                'Mg++': 0.000770702796967699,
                'Na+': 0.4289446521088157,
                'K+': 0.029964958606621447,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0009431257713928086,
                'Cl-': 0.6783384113501951,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.011921740485424909,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.0001383919008252693,
                'H2S': 0,
                'HCO3-': 0.21124838486579364,
                'CO2': 1.0479287367647498,
                'CO3--': 0.000003338858597122333,
                'TDS': 1.3626258458673297
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.03',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-4.71',
                'S&DI': '-5.08'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 53.385598975586205,
                'Permeate': 6.268286826522393
              },
              'Pressure': {
                'Feed': 6.268286826522393,
                'Net Driving': 8.405710550243247,
                'Delta Pressure': 0.24540111288087746,
                'Feed Osm. Pressure': 0.1796743079213081
              },
              'Other': {
                'Recovery': 11.74153132455992,
                'Beta (Conc. Pol.)': 1.1002906471175267,
                'Flux': 20.51782114118997,
                'A-Value': 11.313866817361328
              },
              'Stream Property': {
                'pH': 5.488806478730002,
                'Alkalinity': 2.4717373086651416e-7,
                'Conductivity at 25°C': 3.9555126566790086,
                'Hardness': 0.004739494948135112,
                'Density': 995.6235363380833,
                'Ionic Strength': 0.00002459650125546884
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0004115312484367252,
                'Mg++': 0.0009013629221849426,
                'Na+': 0.46533262957501653,
                'K+': 0.03304582813248526,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0011044917228829176,
                'Cl-': 0.7362465407139078,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.011557833615712575,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00016154473258078646,
                'H2S': 0,
                'HCO3-': 0.21299910354571258,
                'CO2': 1.0515333233886661,
                'CO3--': 0.000003384132922809647,
                'TDS': 1.4617642503418429
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.03',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-4.56',
                'S&DI': '-4.92'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 47.117312608122525,
                'Permeate': 6.083887122787287
              },
              'Pressure': {
                'Feed': 6.083887122787287,
                'Net Driving': 8.150078225256442,
                'Delta Pressure': 0.2061238130083858,
                'Feed Osm. Pressure': 0.20306163793402998
              },
              'Other': {
                'Recovery': 12.912211639461137,
                'Beta (Conc. Pol.)': 1.1046545529399856,
                'Flux': 19.914766995237933,
                'A-Value': 11.32576916368185
              },
              'Stream Property': {
                'pH': 5.491303137783997,
                'Alkalinity': 2.9853535901123343e-7,
                'Conductivity at 25°C': 4.198354112451215,
                'Hardness': 0.005600044684997605,
                'Density': 995.6236187501619,
                'Ionic Strength': 0.00002657345442458244
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0004858726659433053,
                'Mg++': 0.0010652539372275037,
                'Na+': 0.5081747475845825,
                'K+': 0.03675133421815963,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0013077114015794273,
                'Cl-': 0.8044784333302104,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.011201542486597205,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00019045152079273393,
                'H2S': 0,
                'HCO3-': 0.2150254999150831,
                'CO2': 1.0552099334721763,
                'CO3--': 0.0000034383583206434536,
                'TDS': 1.5786842854184966
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.04',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-4.39',
                'S&DI': '-4.75'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 41.03342598690906,
                'Permeate': 5.919654774991183
              },
              'Pressure': {
                'Feed': 5.919654774991183,
                'Net Driving': 7.923432504777009,
                'Delta Pressure': 0.16965863289642874,
                'Feed Osm. Pressure': 0.23254211639532166
              },
              'Other': {
                'Recovery': 14.426420979032404,
                'Beta (Conc. Pol.)': 1.1104845984434402,
                'Flux': 19.377890252139927,
                'A-Value': 11.335674913189528
              },
              'Stream Property': {
                'pH': 5.4944937611935725,
                'Alkalinity': 3.614752014822434e-7,
                'Conductivity at 25°C': 4.495995410670138,
                'Hardness': 0.006715349809060266,
                'Density': 995.6237198889244,
                'Ionic Strength': 0.00002899886572103412
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0005820362480605816,
                'Mg++': 0.0012777755403434953,
                'Na+': 0.560661580968653,
                'K+': 0.041379745965496297,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0015724693204498836,
                'Cl-': 0.8881307623653326,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.01088124051093695,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00022773448783217738,
                'H2S': 0,
                'HCO3-': 0.21745550136053823,
                'CO2': 1.0590374271748724,
                'CO3--': 0.000003505654550696464,
                'TDS': 1.7221723524221937
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.04',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-4.21',
                'S&DI': '-4.55'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 35.11377177685592,
                'Permeate': 5.770143877045278
              },
              'Pressure': {
                'Feed': 5.770143877045278,
                'Net Driving': 7.71827660557958,
                'Delta Pressure': 0.13592758451245038,
                'Feed Osm. Pressure': 0.27096189017444333
              },
              'Other': {
                'Recovery': 16.432708834909263,
                'Beta (Conc. Pol.)': 1.1182893093472355,
                'Flux': 18.889565850619224,
                'A-Value': 11.343730266907187
              },
              'Stream Property': {
                'pH': 5.498736867380835,
                'Alkalinity': 4.4216319685307074e-7,
                'Conductivity at 25°C': 4.880478508096333,
                'Hardness': 0.008226422709432649,
                'Density': 995.6238506642976,
                'Ionic Strength': 0.00003213397751750123
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0007120283611788084,
                'Mg++': 0.0015658898309653135,
                'Na+': 0.6284161037521063,
                'K+': 0.0474541540458448,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0019333712674715463,
                'Cl-': 0.9961842159626506,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.01064521636381981,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.0002779633778212714,
                'H2S': 0,
                'HCO3-': 0.2205141196397107,
                'CO2': 1.0631377763340348,
                'CO3--': 0.0000035933994126602628,
                'TDS': 1.9077066560009817
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.05',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-4.00',
                'S&DI': '-4.33'
              }
            }
          }
        },
        'Stage 2': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 58.68725712728435,
                'Permeate': 5.592236216698017
              },
              'Pressure': {
                'Feed': 5.592236216698017,
                'Net Driving': 7.472701336754979,
                'Delta Pressure': 0.2826850480256432,
                'Feed Osm. Pressure': 0.3232246800231205
              },
              'Other': {
                'Recovery': 9.528876438319905,
                'Beta (Conc. Pol.)': 1.0841073790604077,
                'Flux': 18.306345965958013,
                'A-Value': 11.354765034294173
              },
              'Stream Property': {
                'pH': 5.5019191605546744,
                'Alkalinity': 5.037243566831434e-7,
                'Conductivity at 25°C': 5.147424876692696,
                'Hardness': 0.00935628371917914,
                'Density': 995.6239417669066,
                'Ionic Strength': 0.00003431427916211911
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0008147800884209572,
                'Mg++': 0.001777950836092759,
                'Na+': 0.6752873102136994,
                'K+': 0.05207779669020576,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0021624408943146166,
                'Cl-': 1.0712163871693199,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.01041791586076798,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00032033166587682355,
                'H2S': 0,
                'HCO3-': 0.22287766776006374,
                'CO2': 1.0664510846531439,
                'CO3--': 0.0000036610249041864657,
                'TDS': 2.036956242203666
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.06',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-3.88',
                'S&DI': '-4.20'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 53.09502167636674,
                'Permeate': 5.370479117793546
              },
              'Pressure': {
                'Feed': 5.370479117793546,
                'Net Driving': 7.168376827519817,
                'Delta Pressure': 0.2464218345428246,
                'Feed Osm. Pressure': 0.3566705250601872
              },
              'Other': {
                'Recovery': 10.11484494822989,
                'Beta (Conc. Pol.)': 1.0859290852233592,
                'Flux': 17.582393633448387,
                'A-Value': 11.36871246664134
              },
              'Stream Property': {
                'pH': 5.5060712032508015,
                'Alkalinity': 5.788191495439419e-7,
                'Conductivity at 25°C': 5.5452039679291465,
                'Hardness': 0.010821710311591109,
                'Density': 995.6240768686063,
                'Ionic Strength': 0.00003755098341980775
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000942167250748741,
                'Mg++': 0.002056560187952642,
                'Na+': 0.7453131528517057,
                'K+': 0.058262975966701464,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.002502775748236541,
                'Cl-': 1.1828312149955111,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.010682135349448436,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00037013592483455346,
                'H2S': 0,
                'HCO3-': 0.22566363618713517,
                'CO2': 1.0691686350161442,
                'CO3--': 0.00000374589831339339,
                'TDS': 2.228628500360588
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.07',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-3.75',
                'S&DI': '-4.07'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 47.72454340201277,
                'Permeate': 5.16802929972481
              },
              'Pressure': {
                'Feed': 5.16802929972481,
                'Net Driving': 6.891215035207481,
                'Delta Pressure': 0.2127676637841461,
                'Feed Osm. Pressure': 0.39611186076994603
              },
              'Other': {
                'Recovery': 10.8288711244262,
                'Beta (Conc. Pol.)': 1.0884079456710969,
                'Flux': 16.920575315209486,
                'A-Value': 11.380816853625227
              },
              'Stream Property': {
                'pH': 5.5109994177837045,
                'Alkalinity': 6.673967197101601e-7,
                'Conductivity at 25°C': 6.009726652878316,
                'Hardness': 0.012590654875764547,
                'Density': 995.6242347262761,
                'Ionic Strength': 0.00004133241143001565
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0010958032068582673,
                'Mg++': 0.0023929570762239154,
                'Na+': 0.8270412657017256,
                'K+': 0.06556775031592774,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0029146137058963634,
                'Cl-': 1.3131575735017196,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.011027844557633747,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00043010447780844857,
                'H2S': 0,
                'HCO3-': 0.22895354395792505,
                'CO2': 1.072136845926804,
                'CO3--': 0.0000038478895753255444,
                'TDS': 2.4525853043912944
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.01',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.08',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-3.62',
                'S&DI': '-3.93'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 42.55651505077968,
                'Permeate': 4.980872660046138
              },
              'Pressure': {
                'Feed': 4.980872660046138,
                'Net Driving': 6.636115490669131,
                'Delta Pressure': 0.1815609366690335,
                'Feed Osm. Pressure': 0.4433883001275179
              },
              'Other': {
                'Recovery': 11.704136614811658,
                'Beta (Conc. Pol.)': 1.0909335375785327,
                'Flux': 16.30909037895076,
                'A-Value': 11.391211485898156
              },
              'Stream Property': {
                'pH': 5.5169809907185865,
                'Alkalinity': 7.740873164067954e-7,
                'Conductivity at 25°C': 6.564938888175971,
                'Hardness': 0.01476906152831685,
                'Density': 995.6244234968485,
                'Ionic Strength': 0.00004585383718471557
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0012848154293335111,
                'Mg++': 0.0028073335489494583,
                'Na+': 0.9246700128390181,
                'K+': 0.0743870386966388,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.003423176619757602,
                'Cl-': 1.4689044090964474,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.011492177836313094,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.0005037501886940598,
                'H2S': 0,
                'HCO3-': 0.23292245731841488,
                'CO2': 1.075370194313022,
                'CO3--': 0.000003973584548721966,
                'TDS': 2.7203991451581153
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.01',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.09',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-3.48',
                'S&DI': '-3.77'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 37.5756434833813,
                'Permeate': 4.804491643763536
              },
              'Pressure': {
                'Feed': 4.804491643763536,
                'Net Driving': 6.396909883254291,
                'Delta Pressure': 0.15268317540078472,
                'Feed Osm. Pressure': 0.5011485408478955
              },
              'Other': {
                'Recovery': 12.786185939539358,
                'Beta (Conc. Pol.)': 1.094250072312074,
                'Flux': 15.733372364659713,
                'A-Value': 11.400022271193377
              },
              'Stream Property': {
                'pH': 5.524401920177627,
                'Alkalinity': 9.059949255454355e-7,
                'Conductivity at 25°C': 7.269835468257974,
                'Hardness': 0.01751958461650262,
                'Density': 995.6246629820598,
                'Ionic Strength': 0.000051590535063110334
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.001523208564267306,
                'Mg++': 0.003330695369585783,
                'Na+': 1.0485294239274097,
                'K+': 0.08553707200954064,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.004067254612389349,
                'Cl-': 1.6665295311034563,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.012183690323214069,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.0005964572457252736,
                'H2S': 0,
                'HCO3-': 0.23786187466087033,
                'CO2': 1.0790484333512649,
                'CO3--': 0.000004133647451456054,
                'TDS': 3.06016334146391
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.01',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.10',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-4.83',
                'S&DI': '-3.60'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 32.77115313432218,
                'Permeate': 4.63288324014737
              },
              'Pressure': {
                'Feed': 4.63288324014737,
                'Net Driving': 6.16560301316649,
                'Delta Pressure': 0.12606172188116424,
                'Feed Osm. Pressure': 0.5733308603344701
              },
              'Other': {
                'Recovery': 14.137077267797505,
                'Beta (Conc. Pol.)': 1.0985078921115594,
                'Flux': 15.174241035065847,
                'A-Value': 11.407370078838754
              },
              'Stream Property': {
                'pH': 5.533676959536346,
                'Alkalinity': 0.0000010714027435848647,
                'Conductivity at 25°C': 8.345148928338482,
                'Hardness': 0.021105011922248892,
                'Density': 995.6250263221577,
                'Ionic Strength': 0.000060300421495042884
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0018335999018314485,
                'Mg++': 0.004013141504859906,
                'Na+': 1.2372132236692763,
                'K+': 0.10155764254227835,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.004909591141997812,
                'Cl-': 1.96734715024368,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.01389543061006682,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.0007169137442509234,
                'H2S': 0,
                'HCO3-': 0.24415311629158792,
                'CO2': 1.083443565564875,
                'CO3--': 0.000004343286433883908,
                'TDS': 3.5756441529362637
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.01',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.12',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-3.73',
                'S&DI': '-3.41'
              }
            }
          }
        }
      },
      'RO-HP_3': {
        'Stage 1': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 70.00859561600683,
                'Permeate': 7.982512595621383
              },
              'Pressure': {
                'Feed': 7.982512595621383,
                'Net Driving': 5.912170124764974,
                'Delta Pressure': 0.3527827718619329,
                'Feed Osm. Pressure': 0.002142509040792214
              },
              'Other': {
                'Recovery': 11.40218929601875,
                'Beta (Conc. Pol.)': 1.0447601902498902,
                'Flux': 26.128980129790843,
                'A-Value': 20.484713290173865
              },
              'Stream Property': {
                'pH': 5.497065583222801,
                'Alkalinity': 7.783481461009628e-8,
                'Conductivity at 25°C': 2.2051184647921125,
                'Hardness': 0.0000129040923511449,
                'Density': 995.6229618394459,
                'Ionic Strength': 0.000010805180317394351
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000001215485336153448,
                'Mg++': 0.0000023964915125904463,
                'Na+': 0.1665705009536984,
                'K+': 0.012905886393261642,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0000023764985711927856,
                'Cl-': 0.26360619022889553,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.005016401417506222,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000005017115811528342,
                'H2S': 0,
                'HCO3-': 0.19859631287859417,
                'CO2': 0.9638525194438184,
                'CO3--': 0.000003197199591270784,
                'TDS': 0.6467094946627787
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-9.44',
                'S&DI': '0.00'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 62.026083020223204,
                'Permeate': 7.566312848486138
              },
              'Pressure': {
                'Feed': 7.566312848486138,
                'Net Driving': 5.586336792032756,
                'Delta Pressure': 0.29863152075613086,
                'Feed Osm. Pressure': 0.0022792930742725594
              },
              'Other': {
                'Recovery': 12.198598525106268,
                'Beta (Conc. Pol.)': 1.049610926603008,
                'Flux': 24.761188396090574,
                'A-Value': 20.544648871446114
              },
              'Stream Property': {
                'pH': 5.491519281994881,
                'Alkalinity': 3.634991570174834e-8,
                'Conductivity at 25°C': 2.2950651220609766,
                'Hardness': 0.000015463873272062797,
                'Density': 995.6229868329822,
                'Ionic Strength': 0.000011418649900926742
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000001456211205833279,
                'Mg++': 0.000002872119078167049,
                'Na+': 0.17907995106994032,
                'K+': 0.013896474688383518,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0000028339888250192377,
                'Cl-': 0.28502025275967396,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.005559265757007301,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000005990588769989221,
                'H2S': 0,
                'HCO3-': 0.19859613952861654,
                'CO2': 0.9761342423202493,
                'CO3--': 0.000003157640144875809,
                'TDS': 0.6821683943516456
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-9.38',
                'S&DI': '0.00'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 54.45977017189849,
                'Permeate': 7.212537822817726
              },
              'Pressure': {
                'Feed': 7.212537822817726,
                'Net Driving': 5.312198504978652,
                'Delta Pressure': 0.2493267899500641,
                'Feed Osm. Pressure': 0.002440782663510714
              },
              'Other': {
                'Recovery': 13.243790416397003,
                'Beta (Conc. Pol.)': 1.0530102565859703,
                'Flux': 23.6038649889831,
                'A-Value': 20.59506563423027
              },
              'Stream Property': {
                'pH': 5.48569743142463,
                'Alkalinity': -6.967038507004474e-9,
                'Conductivity at 25°C': 2.3905369455501124,
                'Hardness': 0.00001865139246703191,
                'Density': 995.6230133883715,
                'Ionic Strength': 0.000012069786411755
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0000017555808583232479,
                'Mg++': 0.0000034646217306010864,
                'Na+': 0.19235057913490408,
                'K+': 0.014955681120487322,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0000034033741862980866,
                'Cl-': 0.30770675909053435,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.006166641514403053,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000007193897401752705,
                'H2S': 0,
                'HCO3-': 0.19864453649584687,
                'CO2': 0.9894383469627803,
                'CO3--': 0.000003117386559152183,
                'TDS': 0.7198431322169119
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-9.31',
                'S&DI': '0.00'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 47.24723234969136,
                'Permeate': 6.918143147866231
              },
              'Pressure': {
                'Feed': 6.918143147866231,
                'Net Driving': 5.0851545695002205,
                'Delta Pressure': 0.2043462241574611,
                'Feed Osm. Pressure': 0.002636811170051022
              },
              'Other': {
                'Recovery': 14.642430474367085,
                'Beta (Conc. Pol.)': 1.0578100546949591,
                'Flux': 22.640828484780563,
                'A-Value': 20.636807358531083
              },
              'Stream Property': {
                'pH': 5.4796150322972865,
                'Alkalinity': -5.1646109516991386e-8,
                'Conductivity at 25°C': 2.492326167275063,
                'Hardness': 0.00002272299351995055,
                'Density': 995.6230417887092,
                'Ionic Strength': 0.000012764982796205968
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0000021373398387258002,
                'Mg++': 0.00000422184931408247,
                'Na+': 0.2065198076695499,
                'K+': 0.016099115487492346,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000004131745777058636,
                'Cl-': 0.3318662145096354,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.006859102043993306,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000008717745777614956,
                'H2S': 0,
                'HCO3-': 0.1987688172546718,
                'CO2': 1.0039045575693812,
                'CO3--': 0.0000030770136031443376,
                'TDS': 0.7601353426596533
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-9.23',
                'S&DI': '0.00'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 40.329089203084656,
                'Permeate': 6.678507470462626
              },
              'Pressure': {
                'Feed': 6.678507470462626,
                'Net Driving': 4.9010609502107085,
                'Delta Pressure': 0.1632720299357087,
                'Feed Osm. Pressure': 0.0028834242916020835
              },
              'Other': {
                'Recovery': 16.560025535989062,
                'Beta (Conc. Pol.)': 1.0652400596547167,
                'Flux': 21.85694657854077,
                'A-Value': 20.67063132278094
              },
              'Stream Property': {
                'pH': 5.473238790115516,
                'Alkalinity': -9.711161480222578e-8,
                'Conductivity at 25°C': 2.603401369063196,
                'Hardness': 0.00002813070954414134,
                'Density': 995.6230730111458,
                'Ionic Strength': 0.000013527018656725798
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0000026432948042485135,
                'Mg++': 0.000005228219644815987,
                'Na+': 0.2220725008377517,
                'K+': 0.017374204631151403,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.0000051012746489154056,
                'Cl-': 0.35824861459366814,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.007683212295533495,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000010722242366846741,
                'H2S': 0,
                'HCO3-': 0.1990260675409281,
                'CO2': 1.0199449889839476,
                'CO3--': 0.000003037205176427737,
                'TDS': 0.8044313321356742
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-9.13',
                'S&DI': '0.00'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 33.65058173487383,
                'Permeate': 6.489229423065378
              },
              'Pressure': {
                'Feed': 6.489229423065378,
                'Net Driving': 4.75611652580329,
                'Delta Pressure': 0.12580486432040172,
                'Feed Osm. Pressure': 0.003208420261774941
              },
              'Other': {
                'Recovery': 19.284152274670056,
                'Beta (Conc. Pol.)': 1.075258987366441,
                'Flux': 21.237839468626095,
                'A-Value': 20.69722882284497
              },
              'Stream Property': {
                'pH': 5.466535058650342,
                'Alkalinity': -1.411249239180827e-7,
                'Conductivity at 25°C': 2.7252812551097776,
                'Hardness': 0.00003573667425515252,
                'Density': 995.6231076029304,
                'Ionic Strength': 0.000014367584602123785
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.00000335298441501756,
                'Mg++': 0.000006644856560735887,
                'Na+': 0.2392471923613315,
                'K+': 0.018814397186881743,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000006470426400236444,
                'Cl-': 0.3871538124346891,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.008683589470497705,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000013506004530040543,
                'H2S': 0,
                'HCO3-': 0.19957553053206506,
                'CO2': 1.0385331920460286,
                'CO3--': 0.0000030001171534607734,
                'TDS': 0.8535074963745247
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-9.01',
                'S&DI': '0.00'
              }
            }
          },
          '6': {
            'Category': {
              'Flow': {
                'Feed': 27.161352315683647,
                'Permeate': 6.345960126095722
              },
              'Pressure': {
                'Feed': 6.345960126095722,
                'Net Driving': 4.646687353509015,
                'Delta Pressure': 0.0917832116996239,
                'Feed Osm. Pressure': 0.00366487869461815
              },
              'Other': {
                'Recovery': 23.363932886476366,
                'Beta (Conc. Pol.)': 1.090694892024237,
                'Flux': 20.769267475489414,
                'A-Value': 20.717248751731944
              },
              'Stream Property': {
                'pH': 5.459543034562123,
                'Alkalinity': -1.7953887126642374e-7,
                'Conductivity at 25°C': 2.8659210708103147,
                'Hardness': 0.00004741132138712848,
                'Density': 995.6231483576994,
                'Ionic Strength': 0.000015350664663970103
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000004438437419406046,
                'Mg++': 0.000008821648281520746,
                'Na+': 0.2594250050139827,
                'K+': 0.020565090099187996,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000008586587781682434,
                'Cl-': 0.420637373856826,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.009997255200703156,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00001771405646875178,
                'H2S': 0,
                'HCO3-': 0.2006599790223117,
                'CO2': 1.060964380040648,
                'CO3--': 0.000002969564532913559,
                'TDS': 0.9113272334874958
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.85',
                'S&DI': '0.00'
              }
            }
          }
        },
        'Stage 2': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 62.44617658914527,
                'Permeate': 6.084547584246471
              },
              'Pressure': {
                'Feed': 6.084547584246471,
                'Net Driving': 4.4471553793731395,
                'Delta Pressure': 0.3065744953004346,
                'Feed Osm. Pressure': 0.004367873592248223
              },
              'Other': {
                'Recovery': 9.743667133183811,
                'Beta (Conc. Pol.)': 1.055258887514597,
                'Flux': 19.912589177216606,
                'A-Value': 20.753901003599754
              },
              'Stream Property': {
                'pH': 5.45393754782997,
                'Alkalinity': -2.1390644676830503e-7,
                'Conductivity at 25°C': 2.9173428585240186,
                'Hardness': 0.000054868237077556294,
                'Density': 995.6231607742463,
                'Ionic Strength': 0.00001565272871145678
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.0000051820980760654936,
                'Mg++': 0.000010181488838663414,
                'Na+': 0.2649390199598219,
                'K+': 0.021167535508542768,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000009563749746231065,
                'Cl-': 0.4304667043727387,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.010983975809429055,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000020906023120400657,
                'H2S': 0,
                'HCO3-': 0.20133686712632454,
                'CO2': 1.078323976083921,
                'CO3--': 0.0000029417644463817026,
                'TDS': 0.9289428779010848
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.79',
                'S&DI': '0.00'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 56.36162901480239,
                'Permeate': 5.7065831526772275
              },
              'Pressure': {
                'Feed': 5.7065831526772275,
                'Net Driving': 4.160161200086662,
                'Delta Pressure': 0.2667857454608228,
                'Feed Osm. Pressure': 0.004690048643146753
              },
              'Other': {
                'Recovery': 10.124943605122724,
                'Beta (Conc. Pol.)': 1.0571221642571176,
                'Flux': 18.67489264208485,
                'A-Value': 20.806654957109608
              },
              'Stream Property': {
                'pH': 5.451368152190867,
                'Alkalinity': -2.1985918067890533e-7,
                'Conductivity at 25°C': 3.0435355017199592,
                'Hardness': 0.00006488890836479555,
                'Density': 995.6232005316871,
                'Ionic Strength': 0.000016602323493769798
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.00000612893261106549,
                'Mg++': 0.000012040695287781329,
                'Na+': 0.2851668389754213,
                'K+': 0.02288446805045972,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000011268854827288246,
                'Cl-': 0.4630000060916394,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.011959760720791858,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000024641780466841105,
                'H2S': 0,
                'HCO3-': 0.20227959474153345,
                'CO2': 1.0896501840381947,
                'CO3--': 0.000002939315593436707,
                'TDS': 0.985347688158632
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.72',
                'S&DI': '0.00'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 50.65504587365416,
                'Permeate': 5.376597422399373
              },
              'Pressure': {
                'Feed': 5.376597422399373,
                'Net Driving': 3.9110585030993037,
                'Delta Pressure': 0.2306814223238301,
                'Feed Osm. Pressure': 0.00505655313066416
              },
              'Other': {
                'Recovery': 10.614139874258326,
                'Beta (Conc. Pol.)': 1.058266883298138,
                'Flux': 17.595296628206686,
                'A-Value': 20.852426111047905
              },
              'Stream Property': {
                'pH': 5.449151502198487,
                'Alkalinity': -2.1989374927819356e-7,
                'Conductivity at 25°C': 3.1733480171235264,
                'Hardness': 0.00007681858394894639,
                'Density': 995.6232419049007,
                'Ionic Strength': 0.00001758761995347731
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000007255569505477884,
                'Mg++': 0.000014254442135442466,
                'Na+': 0.3062160046432843,
                'K+': 0.024699745695674492,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000013297755176838753,
                'Cl-': 0.4966557630431413,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.012993106924522322,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000029061255822778006,
                'H2S': 0,
                'HCO3-': 0.20341340685739503,
                'CO2': 1.1012107622423206,
                'CO3--': 0.0000029419639694711583,
                'TDS': 1.0440448381506275
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.65',
                'S&DI': '0.00'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 45.27844846470794,
                'Permeate': 5.090977088278549
              },
              'Pressure': {
                'Feed': 5.090977088278549,
                'Net Driving': 3.6963644637419946,
                'Delta Pressure': 0.19782300737589464,
                'Feed Osm. Pressure': 0.00547984971793224
              },
              'Other': {
                'Recovery': 11.243709227904938,
                'Beta (Conc. Pol.)': 1.0600246052602322,
                'Flux': 16.660860141097835,
                'A-Value': 20.891852114380697
              },
              'Stream Property': {
                'pH': 5.447340013643569,
                'Alkalinity': -2.127984545006138e-7,
                'Conductivity at 25°C': 3.3063647996645673,
                'Hardness': 0.00009113873773555406,
                'Density': 995.6232848373136,
                'Ionic Strength': 0.000018606593820415154
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000008607040098256567,
                'Mg++': 0.000016912340978596534,
                'Na+': 0.3280464376261702,
                'K+': 0.026620788985932405,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000015733808870081036,
                'Cl-': 0.5313323262448578,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.014093211017233966,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000034329308171261936,
                'H2S': 0,
                'HCO3-': 0.20478276875461277,
                'CO2': 1.1131012339887523,
                'CO3--': 0.000002950671346109406,
                'TDS': 1.1049540657982715
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.56',
                'S&DI': '0.00'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 40.18747139221436,
                'Permeate': 4.846135029613164
              },
              'Pressure': {
                'Feed': 4.846135029613164,
                'Net Driving': 3.512995196810586,
                'Delta Pressure': 0.1678347635157611,
                'Feed Osm. Pressure': 0.00597784923152697
              },
              'Other': {
                'Recovery': 12.058820477448652,
                'Beta (Conc. Pol.)': 1.0625568956707003,
                'Flux': 15.859847244844117,
                'A-Value': 20.925495697724603
              },
              'Stream Property': {
                'pH': 5.445999532858754,
                'Alkalinity': -1.970103478454913e-7,
                'Conductivity at 25°C': 3.4424600220035315,
                'Hardness': 0.00010855221654462456,
                'Density': 995.6233293896381,
                'Ionic Strength': 0.000019659802655988237
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000010248998841150657,
                'Mg++': 0.000020145254600877566,
                'Na+': 0.3506740462294831,
                'K+': 0.02866428479742057,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000018699405564036234,
                'Cl-': 0.5670074819663657,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.015276111470157566,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.00004068571247352423,
                'H2S': 0,
                'HCO3-': 0.20644683527714017,
                'CO2': 1.125456046429041,
                'CO3--': 0.000002966724357477493,
                'TDS': 1.1681615058364043
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.47',
                'S&DI': '-8.95'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 35.34133638128421,
                'Permeate': 4.638797950816042
              },
              'Pressure': {
                'Feed': 4.638797950816042,
                'Net Driving': 3.35819910198746,
                'Delta Pressure': 0.14040073537904865,
                'Feed Osm. Pressure': 0.006577118697988689
              },
              'Other': {
                'Recovery': 13.12570045673944,
                'Beta (Conc. Pol.)': 1.066094367592232,
                'Flux': 15.18154896142302,
                'A-Value': 20.953855950185066
              },
              'Stream Property': {
                'pH': 5.445222706454467,
                'Alkalinity': -1.703612651546484e-7,
                'Conductivity at 25°C': 3.5819475807935053,
                'Hardness': 0.00013013364512670414,
                'Density': 995.6233758066843,
                'Ionic Strength': 0.000020751843491415103
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000012281695774073769,
                'Mg++': 0.000024153347633722787,
                'Na+': 0.37420308087216414,
                'K+': 0.030861889907947092,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000022382789392562236,
                'Cl-': 0.6037834319917006,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.016567411044246097,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.0000484953883476461,
                'H2S': 0,
                'HCO3-': 0.2084883576893103,
                'CO2': 1.138457884209502,
                'CO3--': 0.0000029919720612183372,
                'TDS': 1.2340144766985777
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.36',
                'S&DI': '-8.84'
              }
            }
          },
          '6': {
            'Category': {
              'Flow': {
                'Feed': 30.702538452852103,
                'Permeate': 4.465940769886199
              },
              'Pressure': {
                'Feed': 4.465940769886199,
                'Net Driving': 3.2294878923411363,
                'Delta Pressure': 0.11526263126825813,
                'Feed Osm. Pressure': 0.007318718899538314
              },
              'Other': {
                'Recovery': 14.545835604910176,
                'Beta (Conc. Pol.)': 1.0711694163903487,
                'Flux': 14.61606875783175,
                'A-Value': 20.977379125319036
              },
              'Stream Property': {
                'pH': 5.4451523246762,
                'Alkalinity': -1.296458476512674e-7,
                'Conductivity at 25°C': 3.7259916220369247,
                'Hardness': 0.00015762590459079674,
                'Density': 995.6234246829117,
                'Ionic Strength': 0.0000218950655759605
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.000014867497876498738,
                'Mg++': 0.000029261392885954656,
                'Na+': 0.3989077774802707,
                'K+': 0.033272802038803416,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0,
                'Fe++': 0,
                'Mn++': 0,
                'SO4--': 0.000027091132798938037,
                'Cl-': 0.6420063829678959,
                'F-': 0,
                'NO3-': 0,
                'Br-': 0.01800821645771728,
                'PO4---': 0,
                'B-': 0,
                'SiO2': 0.000058346922147826727,
                'H2S': 0,
                'HCO3-': 0.21102857847591566,
                'CO2': 1.1523480253797411,
                'CO3--': 0.0000030292396365191464,
                'TDS': 1.3033563536059485
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '0.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '0.00',
                'SrSO4 ': '0.00',
                'Struvite ': '0.000',
                'LSI': '-8.24',
                'S&DI': '-8.72'
              }
            }
          }
        }
      },
      'ro_nos': 3,
      'RO Unit ID': [
        'RO-HP_1',
        'RO-HP_2',
        'RO-HP_3'
      ]
    },
    'clro_elem_summary':  {
      'units': {
        'Recovery': '%',
        'Feed Flow': 'm3/hr',
        'Feed Press': 'atm',
        'Feed TDS': 'mg/L',
        'Conc Flow': 'm3/hr',
        'Perm Flow': 'm3/hr',
        'Perm TDS': 'atm'
      },
      'CLRO_1': {
        'Elements': {
          'CC1': {
            '1': {
              'Recovery': 8.553186154660393,
              'Feed Flow': 2.7116756756778426,
              'Feed Press': 4.335825938198247,
              'Feed TDS': 550.7175170043253,
              'Conc Flow': 2.4797410072264716,
              'Perm Flow': 0.2319346684513709,
              'Perm TDS': 2.7736162211822584
            },
            '2': {
              'Recovery': 8.653950738835777,
              'Feed Flow': 2.4797410837790776,
              'Feed Press': 4.064304622285903,
              'Feed TDS': 602.020303451154,
              'Conc Flow': 2.265145511938164,
              'Perm Flow': 0.2145955718409138,
              'Perm TDS': 3.015757269724599
            },
            '3': {
              'Recovery': 8.796706778319509,
              'Feed Flow': 2.265145585810989,
              'Feed Press': 3.8285460221073517,
              'Feed TDS': 658.8160472764987,
              'Conc Flow': 2.0658873705251484,
              'Perm Flow': 0.19925821528584045,
              'Perm TDS': 3.303491043386272
            },
            '4': {
              'Recovery': 8.971632173754635,
              'Feed Flow': 2.065887442736364,
              'Feed Press': 3.6242648934281227,
              'Feed TDS': 722.0821404679521,
              'Conc Flow': 1.8805436202502714,
              'Perm Flow': 0.1853438224860925,
              'Perm TDS': 3.6506625359555565
            },
            '5': {
              'Recovery': 9.179072900704933,
              'Feed Flow': 1.880543691731599,
              'Feed Press': 3.447740041946459,
              'Feed TDS': 792.9228438790323,
              'Conc Flow': 1.7079272153379477,
              'Perm Flow': 0.1726164763936513,
              'Perm TDS': 4.073337788276007
            }
          },
          'CC Final': {
            '1': {
              'Recovery': 10.420129076190763,
              'Feed Flow': 2.711675675677842,
              'Feed Press': 10.752424289894227,
              'Feed TDS': 8321.947187649861,
              'Conc Flow': 2.429115570144543,
              'Perm Flow': 0.2825601055332992,
              'Perm TDS': 37.35876245189218
            },
            '2': {
              'Recovery': 9.840249940208631,
              'Feed Flow': 2.429124778626665,
              'Feed Press': 10.486083377567402,
              'Feed TDS': 9283.457293135449,
              'Conc Flow': 2.1900928290502617,
              'Perm Flow': 0.23903194957640347,
              'Perm TDS': 50.29461917072499
            },
            '3': {
              'Recovery': 9.005795219577067,
              'Feed Flow': 2.190102597931798,
              'Feed Press': 10.261021399009168,
              'Feed TDS': 10288.95907070185,
              'Conc Flow': 1.9928664428634228,
              'Perm Flow': 0.197236155068375,
              'Perm TDS': 68.62702859762067
            },
            '4': {
              'Recovery': 7.975687476135416,
              'Feed Flow': 1.9928763524397366,
              'Feed Press': 10.068507353117251,
              'Feed TDS': 11298.285862054567,
              'Conc Flow': 1.833930762783336,
              'Perm Flow': 0.15894558965640038,
              'Perm TDS': 94.52039722648297
            },
            '5': {
              'Recovery': 6.82193690119846,
              'Feed Flow': 1.8339403430960106,
              'Feed Press': 9.90117209851246,
              'Feed TDS': 12267.249861613493,
              'Conc Flow': 1.7088300900843783,
              'Perm Flow': 0.12511025301163237,
              'Perm TDS': 131.13180453681628
            }
          }
        },
        'Concentrations': {
          'Feed': {
            'Feed': {
              'Ca++': 48.23,
              'Mg++': 6.3,
              'Na+': 109.12,
              'K+': 2.19,
              'NH4+': 0,
              'Ba++': 0.38,
              'Sr++': 0.46,
              'Fe++': 0.8,
              'Mn++': 0.03,
              'SO4--': 10.46,
              'Cl-': 158.54,
              'F-': 0.16,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.4,
              'SiO2': 26.2,
              'H2S': 0,
              'HCO3-': 187.36,
              'CO2': 27.1,
              'CO3--': 0.12
            }
          },
          'Concentrate': {
            'Conc CC1': {
              'Ca++': 76.49884081270766,
              'Mg++': 9.994558980952755,
              'Na+': 172.96735361899505,
              'K+': 3.4714276553131866,
              'NH4+': 0,
              'Ba++': 0.6027292766020479,
              'Sr++': 0.7296093768488551,
              'Fe++': 1.2688682242355085,
              'Mn++': 0.04758267566476714,
              'SO4--': 16.598527784916072,
              'Cl-': 251.4026224110162,
              'F-': 0.25360051613956713,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.4014456195828189,
              'SiO2': 41.41464867220325,
              'H2S': 0,
              'HCO3-': 296.72116198638355,
              'CO2': 27.18415881640778,
              'CO3--': 0.3006115094334301
            },
            'Conc CCFinal': {
              'Ca++': 1150.9147445404585,
              'Mg++': 154.5636301514988,
              'Na+': 2635.867247369182,
              'K+': 53.31792914104783,
              'NH4+': 0,
              'Ba++': 9.069400696579118,
              'Sr++': 10.969025064896663,
              'Fe++': 19.05988027338979,
              'Mn++': 0.7148563171186615,
              'SO4--': 262.4895273751549,
              'Cl-': 3780.7194760068633,
              'F-': 3.8079400308245717,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.4576997544205131,
              'SiO2': 605.0671098743687,
              'H2S': 0,
              'HCO3-': 4381.165168624918,
              'CO2': 25.162134461352252,
              'CO3--': 85.754763283601
            },
            'Conc Total': {
              'Ca++': 965.014225474956,
              'Mg++': 126.33043516160575,
              'Na+': 2185.508365864697,
              'K+': 43.890238210050114,
              'NH4+': 0,
              'Ba++': 7.6033393510223535,
              'Sr++': 9.203532344635185,
              'Fe++': 16.005268420434994,
              'Mn++': 0.6002033741461006,
              'SO4--': 210.0193605423038,
              'Cl-': 3172.1426753299124,
              'F-': 3.2011651382860697,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 7.8285522716597775,
              'SiO2': 523.9148239228881,
              'H2S': 0,
              'HCO3-': 3754.083449927859,
              'CO2': 533.5718580787743,
              'CO3--': 2.9592543208467603
            }
          },
          'Permeate': {
            'Perm CC1': {
              'Ca++': 0.12241981695855482,
              'Mg++': 0.012643533247290752,
              'Na+': 0.4610546460170795,
              'K+': 0.009280706051833657,
              'NH4+': 0,
              'Ba++': 0.0009619420226031917,
              'Sr++': 0.001181937459546382,
              'Fe++': 0.002085573265135631,
              'Mn++': 0.00007800948076947999,
              'SO4--': 0.013527584164910574,
              'Cl-': 0.5074682189309883,
              'F-': 0.0007117015630173125,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.39748403000876914,
              'SiO2': 0.3078561867432365,
              'H2S': 0,
              'HCO3-': 1.4768697445699874,
              'CO2': 26.638244913798697,
              'CO3--': 0.000006195449260197245
            },
            'Perm CCFinal': {
              'Ca++': 7.444046442498287,
              'Mg++': 0.4404882488478466,
              'Na+': 12.616983370697895,
              'K+': 0.20095713751676383,
              'NH4+': 0,
              'Ba++': 0.058506468751747254,
              'Sr++': 0.07179733129014487,
              'Fe++': 0.12653501519879234,
              'Mn++': 0.0047339740536349855,
              'SO4--': 0.2195241168980559,
              'Cl-': 24.503451878610917,
              'F-': 0.025087843449916887,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.39190984117855576,
              'SiO2': 4.605226158927225,
              'H2S': 0,
              'HCO3-': 16.631967148511833,
              'CO2': 21.11364860262514,
              'CO3--': 0.001052389058409413
            },
            'Perm Total': {
              'Ca++': 0.2041572620542818,
              'Mg++': 0.012193256667387192,
              'Na+': 0.3465195380915155,
              'K+': 0.005528528708433712,
              'NH4+': 0,
              'Ba++': 0.0016045718664442123,
              'Sr++': 0.00196909277922934,
              'Fe++': 0.0034703323765073674,
              'Mn++': 0.00012983320910546885,
              'SO4--': 0.006063105019411182,
              'Cl-': 0.6720913402176756,
              'F-': 0.0006882282725522555,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.010853940184532899,
              'SiO2': 0.12715312974086482,
              'H2S': 0,
              'HCO3-': 0.4980351209799493,
              'CO2': 0.555394263411375,
              'CO3--': 0.00003373167524934933
            }
          }
        }
      },
      'clro_nos': 1,
      'CLRO Unit ID': [
        'CLRO_1'
      ]
    },
    'system_units': {
      'Volume Flow': 'gpm',
      'Pressure': 'atm',
      'Temperature': '°C',
      'Liquid Volume': 'gal',
      'Flux': 'gfd',
      'Power': 'kW'
    },
    'stream_output': {
      '1': {
        'flow': 600,
        'temp': 30,
        'press': 0.5,
        'prop_dict': {
          'malk': 150,
          'ph': 8,
          'toc': 0,
          'temp': 30,
          'tds': 35196.18,
          'flow': 600,
          'press': 0.5,
          'hardness': 0,
          'density': 1019.8,
          'ionic_str': 0
        },
        'ppm_dict': {
          'Ca++': 408,
          'Mg++': 1298,
          'Na+': 10779.9,
          'K+': 396,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2702,
          'Cl-': 19361,
          'F-': 0,
          'NO3-': 0,
          'Br-': 67,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 5,
          'H2S': 0,
          'HCO3-': 176.02,
          'CO2': 1.05,
          'CO3--': 3.25
        },
        'sat_indices': {
          'baso4': '0.00%',
          'caf2': '0.00%',
          'caso4': '21.88%',
          'sio2': '3.90%',
          'srso4': '0.00%',
          'struvite': '0.000%',
          'lsi': '0.76',
          'sdi': '0.38',
          'osmotic_pressure': 25.53,
          'conductivity': '51660',
          'density': '1019.8',
          'mgoh2': '0.19%'
        },
        'molal_dict': {
          'H+': 1.0405199216866985e-8,
          'Ca++': 0.010338279775959441,
          'Mg++': 0.05423419843869891,
          'Na+': 0.47617883771228947,
          'K+': 0.010285722480471231,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 0.00000213562968187354,
          'SO4--': 0.028563981324170127,
          'HSO4-': 6.3655664948535425e-9,
          'Cl-': 0.5545860650408324,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.000851530956316712,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 3.4484841061427736e-9,
          'H3SiO4-': 0.0000021318579209286,
          'H4SiO4': 0.00008237415340288907,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0029295710756438906,
          'CO2': 0.000024181790595872756,
          'CO3--': 0.000055058268479435746,
          'Total': 0
        },
        'ionic_strength': 0,
        'hardness': 0,
        'label': '[ Feed_1 ] Raw Feed'
      },
      '2': {
        'flow': 600,
        'temp': 30,
        'press': 0.4229197806449846,
        'prop_dict': {
          'malk': 150,
          'ph': 8,
          'toc': 0,
          'temp': 30,
          'tds': 35196.18,
          'flow': 600,
          'press': 0.4229197806449846,
          'hardness': 0,
          'density': 1019.8,
          'ionic_str': 0
        },
        'ppm_dict': {
          'Ca++': 408,
          'Mg++': 1298,
          'Na+': 10779.9,
          'K+': 396,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2702,
          'Cl-': 19361,
          'F-': 0,
          'NO3-': 0,
          'Br-': 67,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 5,
          'H2S': 0,
          'HCO3-': 176.02,
          'CO2': 1.05,
          'CO3--': 3.25
        },
        'sat_indices': {
          'baso4': '0.00%',
          'caf2': '0.00%',
          'caso4': '21.88%',
          'sio2': '3.90%',
          'srso4': '0.00%',
          'struvite': '0.000%',
          'lsi': '0.76',
          'sdi': '0.38',
          'osmotic_pressure': 25.53,
          'conductivity': '51660',
          'density': '1019.8',
          'mgoh2': '0.19%'
        },
        'molal_dict': {
          'H+': 1.0405199216866985e-8,
          'Ca++': 0.010338279775959441,
          'Mg++': 0.05423419843869891,
          'Na+': 0.47617883771228947,
          'K+': 0.010285722480471231,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 0.00000213562968187354,
          'SO4--': 0.028563981324170127,
          'HSO4-': 6.3655664948535425e-9,
          'Cl-': 0.5545860650408324,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.000851530956316712,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 3.4484841061427736e-9,
          'H3SiO4-': 0.0000021318579209286,
          'H4SiO4': 0.00008237415340288907,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0029295710756438906,
          'CO2': 0.000024181790595872756,
          'CO3--': 0.000055058268479435746,
          'Total': 0
        },
        'ionic_strength': 0,
        'hardness': 0,
        'label': '[ CF_1 ] Filtrate'
      },
      '3': {
        'flow': 656.2765429599974,
        'temp': 30.000000000000004,
        'press': 0.4229197806449846,
        'prop_dict': {
          'flow': 656.2765429599974,
          'temp': 30.000000000000004,
          'press': 0.4229197806449846,
          'tds': 32312.053737609735,
          'ph': 7.982346797227097,
          'toc': 0.000013960401764121087,
          'malk': 137.98151434857806,
          'hardness': 2.6432625285932465,
          'density': 1017.793819444574,
          'ionic_str': 0.6499256020565856
        },
        'ppm_dict': {
          'Ca++': 373.96248101448964,
          'Mg++': 1189.5695740307672,
          'Na+': 9900.281570190327,
          'K+': 364.13343235863437,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2476.0132422529337,
          'Cl-': 17776.802653593313,
          'F-': 0,
          'NO3-': 0,
          'Br-': 61.59305264744374,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 4.592849317220172,
          'H2S': 0,
          'HCO3-': 162.30929503581908,
          'CO2': 1.0479048946299612,
          'CO3--': 2.795587168789874
        },
        'sat_indices': {
          'density': '1017.9',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '0.69',
          'sdi': '0.32',
          'caso4': '19.63%',
          'struvite': '0.000%',
          'sio2': '3.59%',
          'mgoh2': '0.16%',
          'osmotic_pressure': 23.39,
          'conductivity': '47935'
        },
        'molal_dict': {
          'H+': 1.1097691385398325e-8,
          'Ca++': 0.00946682522863902,
          'Mg++': 0.049656555431641276,
          'Na+': 0.43690895189952256,
          'K+': 0.009449055080710728,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 0.000002042363765778329,
          'SO4--': 0.026150172505795218,
          'HSO4-': 6.425359695134221e-9,
          'Cl-': 0.5087249391888924,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.0007820699090581757,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 2.6925663873975084e-9,
          'H3SiO4-': 0.0000018697001825299922,
          'H4SiO4': 0.00007568187967078063,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0026989655299735865,
          'CO2': 0.000024158796627753226,
          'CO3--': 0.00004726737086171687,
          'Total': 0
        },
        'ionic_strength': 0.6499256020565856,
        'hardness': 2.6432625285932465,
        'label': '[ HP_Pump_1 ] Feed'
      },
      '4': {
        'flow': 656.2776716116553,
        'temp': 30,
        'press': 43.18249342537979,
        'prop_dict': {
          'flow': 656.2776716116553,
          'temp': 30,
          'press': 43.18249342537979,
          'tds': 32311.99728699949,
          'ph': 7.982346906700747,
          'toc': 0.000013960080810799425,
          'malk': 137.98126893154551,
          'hardness': 2.643198139436265,
          'density': 1017.7937812992268,
          'ionic_str': 0.6499244600067059
        },
        'ppm_dict': {
          'Ca++': 373.9618467063747,
          'Mg++': 1189.5675634887598,
          'Na+': 9900.264149059205,
          'K+': 364.13277706373947,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2476.0090700672713,
          'Cl-': 17776.77151014027,
          'F-': 0,
          'NO3-': 0,
          'Br-': 61.592940035629255,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 4.592841179546935,
          'H2S': 0,
          'HCO3-': 162.30900800036972,
          'CO2': 1.0479036144359684,
          'CO3--': 2.795581258322822
        },
        'sat_indices': {
          'density': '1017.9',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '0.69',
          'sdi': '0.32',
          'caso4': '19.63%',
          'struvite': '0.000%',
          'sio2': '3.59%',
          'mgoh2': '0.16%',
          'osmotic_pressure': 23.39,
          'conductivity': '47935'
        },
        'molal_dict': {
          'H+': 1.1097693630031199e-8,
          'Ca++': 0.009466808994628739,
          'Mg++': 0.0496564705788776,
          'Na+': 0.43690817493973544,
          'K+': 0.00944903789995336,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 0.0000020423641061093873,
          'SO4--': 0.02615012795394734,
          'HSO4-': 6.425354352211263e-9,
          'Cl-': 0.5087240384579722,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.0007820684645981808,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 2.692558622672533e-9,
          'H3SiO4-': 0.0000018696970561904384,
          'H4SiO4': 0.00007568174394674947,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0026989607067023987,
          'CO2': 0.000024158766663499407,
          'CO3--': 0.00004726727004763967,
          'Total': 0
        },
        'ionic_strength': 0.6499244600067059,
        'hardness': 2.643198139436265,
        'label': '[ RO-HP_1 ] Element Feed'
      },
      '5': {
        'flow': 240.0587847540137,
        'temp': 30,
        'press': 0,
        'prop_dict': {
          'flow': 240.0587847540137,
          'temp': 30,
          'press': 0,
          'tds': 195.63758178611965,
          'ph': 6.388845838456012,
          'toc': 0.0000594406898509254,
          'malk': 1.6173012799306052,
          'hardness': 7.382576359822954,
          'density': 995.760384011968,
          'ionic_str': 0.003425660358376443
        },
        'ppm_dict': {
          'Ca++': 0.579773892161911,
          'Mg++': 1.4411759773813582,
          'Na+': 70.51016703792483,
          'K+': 3.844009492312683,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2.2431463684290995,
          'Cl-': 114.37710884754418,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.6114852230041936,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.0349782879944113,
          'H2S': 0,
          'HCO3-': 1.9954375819627532,
          'CO2': 1.1649048216689386,
          'CO3--': 0.00029907740419510585
        },
        'sat_indices': {
          'density': '995.8',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-4.85',
          'sdi': '-5.22',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.02%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.16,
          'conductivity': '404'
        },
        'molal_dict': {
          'H+': 4.3430422985715807e-7,
          'Ca++': 0.00001453058516401615,
          'Mg++': 0.00005955961467334838,
          'Na+': 0.0030806564039233607,
          'K+': 0.00009875529703170804,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 3.816204831866261e-8,
          'SO4--': 0.000023453683697928395,
          'HSO4-': 8.842353780303793e-10,
          'Cl-': 0.0032405342373802884,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.00000768684167784775,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 2.4511814080326072e-15,
          'H3SiO4-': 2.3022340566058553e-10,
          'H4SiO4': 5.84519736046095e-7,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000032848669742759733,
          'CO2': 0.000026587014029113803,
          'CO3--': 5.006079051864055e-9
        },
        'ionic_strength': 0.003425660358376443,
        'hardness': 7.382576359822954,
        'label': '[ RO-HP_1 ] Downstream Permeate'
      },
      '6': {
        'flow': 266.3023046636243,
        'temp': 30,
        'press': 0,
        'prop_dict': {
          'flow': 266.3023046636243,
          'temp': 30,
          'press': 0,
          'tds': 177.25147337943264,
          'ph': 6.345909746941109,
          'toc': 0.00005705378240171824,
          'malk': 1.4770941881861408,
          'hardness': 6.6613498237664945,
          'density': 995.747530281254,
          'ionic_str': 0.0031030477091874764
        },
        'ppm_dict': {
          'Ca++': 0.5231856704505407,
          'Mg++': 1.3003517401975355,
          'Na+': 63.88573712297434,
          'K+': 3.489083297170543,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2.02356547998413,
          'Cl-': 103.61565381601281,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.5544839383253349,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.031734376093135355,
          'H2S': 0,
          'HCO3-': 1.8274318985944162,
          'CO2': 1.1815536401697733,
          'CO3--': 0.000246039629855644
        },
        'sat_indices': {
          'density': '995.7',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-4.97',
          'sdi': '-5.35',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.02%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.14,
          'conductivity': '367'
        },
        'molal_dict': {
          'H+': 4.781742580982654e-7,
          'Ca++': 0.00001311227171316916,
          'Mg++': 0.00005373946744486079,
          'Na+': 0.002791213643823248,
          'K+': 0.00008963650939316768,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 3.447333669881035e-8,
          'SO4--': 0.000021157605134509085,
          'HSO4-': 8.880755585581019e-10,
          'Cl-': 0.0029356246217295693,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.00000697025377538841,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 1.8050456831665165e-15,
          'H3SiO4-': 1.8863213738146492e-10,
          'H4SiO4': 5.303283200547689e-7,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000030082815018536395,
          'CO2': 0.000026966848591553237,
          'CO3--': 4.118288793859878e-9,
          'Total': 0
        },
        'ionic_strength': 0.0031030477091874764,
        'hardness': 6.6613498237664945,
        'label': '[ HP_Pump_2 ] Feed'
      },
      '7': {
        'flow': 266.3023046636243,
        'temp': 30,
        'press': 9.357401797773557,
        'prop_dict': {
          'flow': 266.3023046636243,
          'temp': 30,
          'press': 9.357401797773557,
          'tds': 177.25147337943264,
          'ph': 6.345909746941109,
          'toc': 0.00005705378240171824,
          'malk': 1.4770941881861408,
          'hardness': 6.6613498237664945,
          'density': 995.747530281254,
          'ionic_str': 0.0031030477091874764
        },
        'ppm_dict': {
          'Ca++': 0.5231856704505407,
          'Mg++': 1.3003517401975355,
          'Na+': 63.88573712297434,
          'K+': 3.489083297170543,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 2.02356547998413,
          'Cl-': 103.61565381601281,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.5544839383253349,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.031734376093135355,
          'H2S': 0,
          'HCO3-': 1.8274318985944162,
          'CO2': 1.1815536401697733,
          'CO3--': 0.000246039629855644
        },
        'sat_indices': {
          'density': '995.7',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-4.97',
          'sdi': '-5.35',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.02%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.14,
          'conductivity': '367'
        },
        'molal_dict': {
          'H+': 4.781742580982654e-7,
          'Ca++': 0.00001311227171316916,
          'Mg++': 0.00005373946744486079,
          'Na+': 0.002791213643823248,
          'K+': 0.00008963650939316768,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 3.447333669881035e-8,
          'SO4--': 0.000021157605134509085,
          'HSO4-': 8.880755585581019e-10,
          'Cl-': 0.0029356246217295693,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.00000697025377538841,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 1.8050456831665165e-15,
          'H3SiO4-': 1.8863213738146492e-10,
          'H4SiO4': 5.303283200547689e-7,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000030082815018536395,
          'CO2': 0.000026966848591553237,
          'CO3--': 4.118288793859878e-9,
          'Total': 0
        },
        'ionic_strength': 0.0031030477091874764,
        'hardness': 6.6613498237664945,
        'label': '[ RO-HP_2 ] Element Feed'
      },
      '8': {
        'flow': 210.0257868480205,
        'temp': 30,
        'press': 0,
        'prop_dict': {
          'flow': 210.0257868480205,
          'temp': 30,
          'press': 0,
          'tds': 1.8622511016141168,
          'ph': 5.497885737710975,
          'toc': 0.0000277764305243194,
          'malk': 0.020656047729550674,
          'hardness': 0.007926659840129678,
          'density': 995.6238186245811,
          'ionic_str': 0.000031363078493145785
        },
        'ppm_dict': {
          'Ca++': 0.0006885566578662932,
          'Mg++': 0.001507330033354495,
          'Na+': 0.6115735143455231,
          'K+': 0.04617554605156375,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.001844867839799898,
          'Cl-': 0.9695114448422102,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.011472393456523018,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.00026987415194589036,
          'H2S': 0,
          'HCO3-': 0.21920401002599224,
          'CO2': 1.05897995409582,
          'CO3--': 0.000003564209337820093
        },
        'sat_indices': {
          'density': '995.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-9.50',
          'sdi': '0.00',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.00%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0,
          'conductivity': '4.8'
        },
        'molal_dict': {
          'H+': 0.0000031984763944776246,
          'Ca++': 1.7255961992533904e-8,
          'Mg++': 6.228999006129492e-8,
          'Na+': 0.000026718694371914616,
          'K+': 0.0000011862139638215543,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 4.635978480177517e-9,
          'SO4--': 1.9282310272823763e-8,
          'HSO4-': 6.708175849971e-12,
          'Cl-': 0.000027466636754077635,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 1.4420856223635778e-7,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 2.499694595890229e-19,
          'H3SiO4-': 2.1513009481624678e-13,
          'H4SiO4': 4.5111500958808735e-9,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0000036083044850120494,
          'CO2': 0.000024168066383552074,
          'CO3--': 5.96557552758725e-11
        },
        'ionic_strength': 0.000031363078493145785,
        'hardness': 0.007926659840129678,
        'label': '[ HP_Pump_3 ] Feed'
      },
      '9': {
        'flow': 210.0257868480205,
        'temp': 30,
        'press': 11.529875821113722,
        'prop_dict': {
          'flow': 210.0257868480205,
          'temp': 30,
          'press': 11.529875821113722,
          'tds': 1.8622511016141168,
          'ph': 5.497885737710975,
          'toc': 0.0000277764305243194,
          'malk': 0.020656047729550674,
          'hardness': 0.007926659840129678,
          'density': 995.6238186245811,
          'ionic_str': 0.000031363078493145785
        },
        'ppm_dict': {
          'Ca++': 0.0006885566578662932,
          'Mg++': 0.001507330033354495,
          'Na+': 0.6115735143455231,
          'K+': 0.04617554605156375,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.001844867839799898,
          'Cl-': 0.9695114448422102,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.011472393456523018,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.00026987415194589036,
          'H2S': 0,
          'HCO3-': 0.21920401002599224,
          'CO2': 1.05897995409582,
          'CO3--': 0.000003564209337820093
        },
        'sat_indices': {
          'density': '995.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-9.50',
          'sdi': '0.00',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.00%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0,
          'conductivity': '4.8'
        },
        'molal_dict': {
          'H+': 0.0000031984763944776246,
          'Ca++': 1.7255961992533904e-8,
          'Mg++': 6.228999006129492e-8,
          'Na+': 0.000026718694371914616,
          'K+': 0.0000011862139638215543,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 4.635978480177517e-9,
          'SO4--': 1.9282310272823763e-8,
          'HSO4-': 6.708175849971e-12,
          'Cl-': 0.000027466636754077635,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 1.4420856223635778e-7,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 2.499694595890229e-19,
          'H3SiO4-': 2.1513009481624678e-13,
          'H4SiO4': 4.5111500958808735e-9,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0000036083044850120494,
          'CO2': 0.000024168066383552074,
          'CO3--': 5.96557552758725e-11
        },
        'ionic_strength': 0.000031363078493145785,
        'hardness': 0.007926659840129678,
        'label': '[ RO-HP_3 ] Element Feed'
      },
      '10': {
        'flow': 183.78918930345006,
        'temp': 30,
        'press': 5.44,
        'prop_dict': {
          'flow': 183.78918930345006,
          'temp': 30,
          'press': 5.44,
          'tds': 0.8277632642402957,
          'ph': 5.473398186084063,
          'toc': 0.000026713898604963968,
          'malk': -0.00373853651226445,
          'hardness': 0.00003869631635354888,
          'density': 995.6230894568724,
          'ionic_str': 0.000013905050622230098
        },
        'ppm_dict': {
          'Ca++': 0.0000036433779266174166,
          'Mg++': 0.000007187465341131163,
          'Na+': 0.23026665133137378,
          'K+': 0.018208379375212393,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.000006865504396289949,
          'Cl-': 0.3705511244591328,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.008397755059213495,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.000014632306820682278,
          'H2S': 0,
          'HCO3-': 0.20030396698703057,
          'CO2': 1.0260554976472689,
          'CO3--': 0.0000030583738479463928
        },
        'sat_indices': {
          'density': '995.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-11.84',
          'sdi': '0.00',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.00%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0,
          'conductivity': '2.7'
        },
        'molal_dict': {
          'H+': 0.0000033766998617575694,
          'Ca++': 9.130689686611012e-11,
          'Mg++': 2.9701989442455766e-10,
          'Na+': 0.00001005998829238493,
          'K+': 4.677590000928556e-7,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 4.372319726503089e-9,
          'SO4--': 7.175568560384774e-11,
          'HSO4-': 2.6583831168380962e-14,
          'Cl-': 0.000010497854426918897,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 1.0556017071020474e-7,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 1.2003378451776216e-20,
          'H3SiO4-': 1.1000592554245286e-14,
          'H4SiO4': 2.4459063853356644e-10,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0000032971909625035496,
          'CO2': 0.00002341665645311418,
          'CO3--': 5.11893462397846e-11
        },
        'ionic_strength': 0.000013905050622230098,
        'hardness': 0.00003869631635354888,
        'label': '[ EDI_1 ] Feed'
      },
      '11': {
        'flow': 176.4294966785078,
        'temp': 30,
        'press': 3.352399138087014,
        'prop_dict': {
          'flow': 176.4294966785078,
          'temp': 30,
          'press': 3.352399138087014,
          'tds': 0.005251777624298365,
          'ph': 6.814283614986694,
          'toc': 0.000026713898604963968,
          'malk': -0.000037926295466515684,
          'hardness': 1.0969384068390638e-7,
          'density': 995.6225072541957,
          'ionic_str': 1.8299539418835583e-7
        },
        'ppm_dict': {
          'Ca++': 1.0330939300427152e-8,
          'Mg++': 2.038033650604239e-8,
          'Na+': 0.0006529300132269384,
          'K+': 0.00005163056533613947,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 1.9467403770197766e-8,
          'Cl-': 0.0010507120731355062,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.00002381215990325117,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 2.1948460231023436e-7,
          'H2S': 0,
          'HCO3-': 0.0034712755783439177,
          'CO2': 0.0008145046328061161,
          'CO3--': 0.0000011475710707244964
        },
        'sat_indices': {
          'density': '995.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-14.79',
          'sdi': '0.00',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.00%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0,
          'conductivity': '0.0'
        },
        'molal_dict': {
          'H+': 1.533950700026496e-7,
          'Ca++': 2.58904180678301e-13,
          'Mg++': 8.422112135067858e-13,
          'Na+': 2.852547962825298e-8,
          'K+': 1.3263484449759225e-9,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 9.545501860785988e-8,
          'SO4--': 2.0353787388115373e-13,
          'HSO4-': 3.482721447913582e-18,
          'Cl-': 2.976706571538644e-8,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 2.993198810607159e-10,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 8.502958668727586e-20,
          'H3SiO4-': 3.5989920255487515e-15,
          'H4SiO4': 3.665424606684046e-12,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 5.7140434295478973e-8,
          'CO2': 1.858863437967972e-8,
          'CO3--': 1.9207396289994543e-11,
          'Total': 0
        },
        'ionic_strength': 1.8299539418835583e-7,
        'hardness': 1.0969384068390638e-7,
        'label': '[ Product_1 ]'
      },
      '12': {
        'flow': 56.27654295999741,
        'temp': 30,
        'press': 6.777449607965248,
        'prop_dict': {
          'flow': 56.27654295999741,
          'temp': 30,
          'press': 6.777449607965248,
          'tds': 832.3977827495311,
          'ph': 6.964916955046793,
          'toc': 0.00016632580075796278,
          'malk': 6.91162419424137,
          'hardness': 31.492127813376587,
          'density': 996.2088845495709,
          'ionic_str': 0.014579362809666034
        },
        'ppm_dict': {
          'Ca++': 2.4731608205407922,
          'Mg++': 6.147678657078194,
          'Na+': 300.02684365845636,
          'K+': 16.338119925762133,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 9.568286496016903,
          'Cl-': 486.69418475322,
          'F-': 0,
          'NO3-': 0,
          'Br-': 2.5810195676924947,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.14916085606153867,
          'H2S': 0,
          'HCO3-': 8.413704682905768,
          'CO2': 1.2134404982028384,
          'CO3--': 0.005623331796932481
        },
        'sat_indices': {
          'density': '996.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-3.73',
          'sdi': '-3.41',
          'caso4': '0.01%',
          'struvite': '0.000%',
          'sio2': '0.12%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.67,
          'conductivity': '1655'
        },
        'molal_dict': {
          'H+': 1.2123807383004937e-7,
          'Ca++': 0.00006199532477530053,
          'Mg++': 0.00025411374446798215,
          'Na+': 0.01311093802383258,
          'K+': 0.00041981713437221155,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 1.520460440619558e-7,
          'SO4--': 0.00010006506205910656,
          'HSO4-': 8.428105347647026e-10,
          'Cl-': 0.013791636083941398,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.000032451546558792485,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 1.8441750807710095e-13,
          'H3SiO4-': 3.9448540790562565e-9,
          'H4SiO4': 0.000002490125041013948,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0001385316592424917,
          'CO2': 0.000027699998101757473,
          'CO3--': 9.414341371360365e-8
        },
        'ionic_strength': 0.014579362809666034,
        'hardness': 31.492127813376587,
        'label': '[ RO-HP_2 ] Concentrate'
      },
      '13': {
        'flow': 26.236597710215086,
        'temp': 30,
        'press': 8.618565607808348,
        'prop_dict': {
          'flow': 26.236597710215086,
          'temp': 30,
          'press': 8.618565607808348,
          'tds': 9.130106003176301,
          'ph': 5.644642457050247,
          'toc': 0.00003521955873961545,
          'malk': 0.19154180442614896,
          'hardness': 0.06318239215684501,
          'density': 995.628941404921,
          'ionic_str': 0.00015398861979407815
        },
        'ppm_dict': {
          'Ca++': 0.00548642175224984,
          'Mg++': 0.012015932909776404,
          'Na+': 3.2826545707365744,
          'K+': 0.24208749002982397,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.014720200318669796,
          'Cl-': 5.165270085631453,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.03301044891568885,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.0020578610039496143,
          'H2S': 0,
          'HCO3-': 0.37279429246442924,
          'CO2': 1.274330072376686,
          'CO3--': 0.000008699413687757604
        },
        'sat_indices': {
          'density': '995.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-8.24',
          'sdi': '-8.72',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.00%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.01,
          'conductivity': '20'
        },
        'molal_dict': {
          'H+': 0.0000022990201395422068,
          'Ca++': 1.3749585909218386e-7,
          'Mg++': 4.965561207945304e-7,
          'Na+': 0.00014341437474835943,
          'K+': 0.000006219053252236359,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 6.5505912881477705e-9,
          'SO4--': 1.538701106088024e-7,
          'HSO4-': 3.729735707533207e-11,
          'Cl-': 0.0001463344281283935,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 4.149438956450965e-7,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 3.864826743660922e-18,
          'H3SiO4-': 2.3181625989326827e-12,
          'H4SiO4': 3.439809591046818e-8,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000006136558430111295,
          'CO2': 0.000029082854703238374,
          'CO3--': 1.456062657770282e-10
        },
        'ionic_strength': 0.00015398861979407815,
        'hardness': 0.06318239215684501,
        'label': '[ RO-HP_3 ] Concentrate'
      },
      '14': {
        'flow': 2.800012328067487,
        'temp': 30,
        'press': 4.046385393535652,
        'prop_dict': {
          'flow': 2.800012328067487,
          'temp': 30,
          'press': 4.046385393535652,
          'tds': 1.4400421838376745,
          'ph': 6.089932829937603,
          'toc': 0.000026713898604963968,
          'malk': 0.4502131287928097,
          'hardness': 0.00007218317437570306,
          'density': 995.6230999296022,
          'ionic_str': 0.000020460661886251845
        },
        'ppm_dict': {
          'Ca++': 0.000006798193848790494,
          'Mg++': 0.000013411121122929175,
          'Na+': 0.4296554911929974,
          'K+': 0.03397508991880405,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.0000068655043962899496,
          'Cl-': 0.3705511244591328,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.008397755059213495,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.00001463230682068228,
          'H2S': 0,
          'HCO3-': 0.5973832463728858,
          'CO2': 0.7396268510447638,
          'CO3--': 0.000037769708452313555
        },
        'sat_indices': {
          'density': '995.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-10.47',
          'sdi': '0.00',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.00%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0,
          'conductivity': '2.5'
        },
        'molal_dict': {
          'H+': 8.168497258925102e-7,
          'Ca++': 1.7036991468472692e-10,
          'Mg++': 5.542106435506364e-10,
          'Na+': 0.00001877097356201049,
          'K+': 8.72793443585003e-7,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 1.808970633052131e-8,
          'SO4--': 7.177584795947146e-11,
          'HSO4-': 6.4216946524891295e-15,
          'Cl-': 0.000010497854458962496,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 1.0556017103241606e-7,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 2.0561283382991338e-19,
          'H3SiO4-': 4.550674287816389e-14,
          'H4SiO4': 2.445561329362539e-10,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000009833488554184142,
          'CO2': 0.00001687977796408317,
          'CO3--': 6.321682380191365e-10,
          'Total': 0
        },
        'ionic_strength': 0.000020460661886251845,
        'hardness': 0.00007218317437570306,
        'label': '[ Waste_2 ]'
      },
      '15': {
        'flow': 4.578996495306529,
        'temp': 30,
        'press': 2.368615840118431,
        'prop_dict': {
          'flow': 4.578996495306529,
          'temp': 30,
          'press': 2.368615840118431,
          'tds': 25.74377451391051,
          'ph': 4.5744184951121145,
          'toc': 0.000026713898604963968,
          'malk': -0.4252007968200471,
          'hardness': 0.0015045286488466069,
          'density': 995.6398475936529,
          'ionic_str': 0.00043679723210963853
        },
        'ppm_dict': {
          'Ca++': 0.0001416961431023025,
          'Mg++': 0.00027953073714351035,
          'Na+': 8.955397171500875,
          'K+': 0.7081497394936694,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.00027064444855375843,
          'Cl-': 14.60746347994643,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.3310471679718934,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.00056996074446212,
          'H2S': 0,
          'HCO3-': 1.1404527859918563,
          'CO2': 45.32074507599705,
          'CO3--': 0.0000023369325232802226
        },
        'sat_indices': {
          'density': '995.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-10.43',
          'sdi': '0.00',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.00%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.05,
          'conductivity': '62'
        },
        'molal_dict': {
          'H+': 0.00002730778263969892,
          'Ca++': 3.5510799477081953e-9,
          'Mg++': 1.155160702381656e-8,
          'Na+': 0.0003912499923379473,
          'K+': 0.000018191940177591317,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 5.631772948939065e-10,
          'SO4--': 2.8219534750057477e-9,
          'HSO4-': 7.789033430874412e-12,
          'Cl-': 0.0004138379178179198,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.000004161307584833475,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 8.079343636602147e-21,
          'H3SiO4-': 5.5222067100547786e-14,
          'H4SiO4': 9.527787276734322e-9,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.00001877309761941677,
          'CO2': 0.0010343205456406265,
          'CO3--': 3.91146332106798e-11,
          'Total': 0
        },
        'ionic_strength': 0.00043679723210963853,
        'hardness': 0.0015045286488466069,
        'label': '[ Waste_3 ]'
      },
      '16': {
        'flow': 416.39351975321324,
        'temp': 30,
        'press': 42.38887095809981,
        'prop_dict': {
          'flow': 416.39351975321324,
          'temp': 30,
          'press': 42.38887095809981,
          'tds': 50811.03808277009,
          'ph': 7.965440769582698,
          'toc': 0.00435905700002347,
          'malk': 216.5281964272701,
          'hardness': 9187.855143669978,
          'density': 1030.2339548270754,
          'ionic_str': 1.0287962644151458
        },
        'ppm_dict': {
          'Ca++': 589.0367233418734,
          'Mg++': 1873.950211180078,
          'Na+': 15562.353907313487,
          'K+': 571.6639599972299,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 3900.9441110226126,
          'Cl-': 27950.589000556134,
          'F-': 0,
          'NO3-': 0,
          'Br-': 96.719110625045,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 7.218239294113116,
          'H2S': 0,
          'HCO3-': 253.5759389694382,
          'CO2': 1.3393865459042327,
          'CO3--': 4.986880470072987
        },
        'sat_indices': {
          'density': '1030.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '0.98',
          'sdi': '0.50',
          'caso4': '34.36%',
          'struvite': '0.000%',
          'sio2': '5.64%',
          'mgoh2': '0.24%',
          'osmotic_pressure': 37.45,
          'conductivity': '70962'
        },
        'molal_dict': {
          'H+': 9.80131890415281e-9,
          'Ca++': 0.015006038942262224,
          'Mg++': 0.07872128253447355,
          'Na+': 0.6911400414466357,
          'K+': 0.014928494402020934,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'OH-': 0.0000019943061614730043,
          'SO4--': 0.04146089966902834,
          'HSO4-': 7.518070740310784e-9,
          'Cl-': 0.8049477893167853,
          'F-': 0,
          'HF': 0,
          'NO3-': 0,
          'Br-': 0.0012358720546704117,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 6.5295989781457045e-9,
          'H3SiO4-': 0.000002880954067256511,
          'H4SiO4': 0.00011977229492787499,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.004243135783766552,
          'CO2': 0.00003107307992161572,
          'CO3--': 0.00008484813633530303
        },
        'ionic_strength': 1.0287962644151458,
        'hardness': 9187.855143669978,
        'label': '[ Waste_1 ]'
      }
    },
    'errors': [
      {
        'name': 'RO-HP_1',
        'data': [
          'WARNING!! High LSI. LSI > 0.0. Concentrate CaCO3 exceeds saturation in RO-HP_1 Conc\n\nThe LSI (Langelier Saturation Index) for the system concentrate is a positive number. This means CaCO3 precipitation, and  subsequent loss of membrane productivity in the system as  designed is likely. A number of system design options exist to avoid CaCO3  saturation, including:\n 1) lower the system recovery, \n 2) acidify the feed by dosing with sulfuric, hydrochloric,  or other acid,\n 3) decrease the calcium concentration in the  feed by IX softening,\n 4) decrease the calcium and alkalinity  in the feed by lime or lime-soda ash softening, \n 5) reduce the likelihood of CaCO3 precipitation by injecting  a scale inhibitor in the feed (contact Veolia for advice  regarding scale inhibitor).\n',
          'WARNING!! High SDI. SDI > 0.0. Concentrate CaCO3 exceeds saturation in RO-HP_1 Conc\n\nThe SDSI (Stiff & Davis Stability Index) for the system concentrate is a positive number. This means CaCO3 precipitation, and subsequent loss  of membrane productivity in the system, as designed is likely.  A number of system design options exist to avoid CaCO3 saturation including:\n 1) lower the system recovery, \n 2) acidify the feed by dosing with sulfuric, hydrochloric, or other acid, decrease the calcium concentration in the feed by IX softening, \n 3) decrease the calcium and alkalinity in the feed by lime or lime-soda ash softening, \n 4) reduce the likelyhood of CaCO3 precipitation by injecting a scale inhibitor in the feed (contact Veolia for advice regarding scale inhibitor).\n'
        ]
      }
    ],
    'stream_input_dict': {
      '1': {
        'source': 'Feed_1',
        'destination': 'CF_1'
      },
      '2': {
        'source': 'CF_1',
        'destination': 'MixSplit_1'
      },
      '3': {
        'source': 'MixSplit_1',
        'destination': 'HP_Pump_1'
      },
      '4': {
        'source': 'HP_Pump_1',
        'destination': 'RO-HP_1'
      },
      '5': {
        'source': 'RO-HP_1',
        'destination': 'MixSplit_2'
      },
      '6': {
        'source': 'MixSplit_2',
        'destination': 'HP_Pump_2'
      },
      '7': {
        'source': 'HP_Pump_2',
        'destination': 'RO-HP_2'
      },
      '8': {
        'source': 'RO-HP_2',
        'destination': 'HP_Pump_3'
      },
      '9': {
        'source': 'HP_Pump_3',
        'destination': 'RO-HP_3'
      },
      '10': {
        'source': 'RO-HP_3',
        'destination': 'EDI_1'
      },
      '11': {
        'source': 'EDI_1',
        'destination': 'Product_1'
      },
      '12': {
        'source': 'RO-HP_2',
        'destination': 'MixSplit_1'
      },
      '13': {
        'source': 'RO-HP_3',
        'destination': 'MixSplit_2'
      },
      '14': {
        'source': 'EDI_1',
        'destination': 'Waste_2'
      },
      '15': {
        'source': 'EDI_1',
        'destination': 'Waste_3'
      },
      '16': {
        'source': 'RO-HP_1',
        'destination': 'Waste_1'
      }
    },
    'edi_output_dict': {
      'output_user': {
        'status_check': true,
        'stack_model': 'MK-7',
        'system_param': {
          'target_resistivity': 16,
          'target_resistivity_range': '1-16 MOhm.cm',
          'target_resistivity_status': 'O.K.',
          'product_flow': 176.4294966785078,
          'product_flow_range': '>18.5 gpm',
          'product_flow_status': 'O.K.',
          'flow_per_stack': 25.000077825328898,
          'flow_per_stack_range': '18.5 - 34.3 gpm',
          'flow_per_stack_status': 'O.K.',
          'temperature': 30,
          'temperature_range': '4.4 - 40 ( °C)',
          'temperature_status': 'O.K.',
          'target_silica': 5,
          'target_silica_range': '5,10,20 or blank',
          'target_silica_status': 'O.K.',
          'rect_efficiency': 70,
          'rect_efficiency_range': '40% - 95%',
          'rect_efficiency_status': 'O.K.',
          'rect_dc_output': 400,
          'rect_dc_output_range': '400 VDC',
          'rect_dc_output_status': 'O.K.',
          'feed_pressure': 5.44,
          'feed_pressure_range': '4.0 - 6.8 atm',
          'feed_pressure_status': 'O.K.'
        },
        'feed_param': {
          'TEA': 2.1234602646748044,
          'TEA_range': '0-22.9',
          'TEA_status': 'O.K.',
          'TEC': 0.6911256331854235,
          'TEC_range': '0-22.9',
          'TEC_status': 'O.K.',
          'ph': 5.473398186084063,
          'ph_range': '4 - 11',
          'ph_status': 'O.K.',
          'alkalinity': 0.16424925292942455,
          'alkalinity_range': '0.0 - 17.2',
          'alkalinity_status': 'O.K.',
          'hardness': 0,
          'hardness_range': '0.0 - 1',
          'hardness_status': 'O.K.',
          'Fe': 0,
          'Fe_range': '0.0 - 0.01',
          'Fe_status': 'O.K.',
          'Mn': 0,
          'Mn_range': '0.0 - 0.01',
          'Mn_status': 'O.K.',
          'Boron': 0,
          'Boron_range': '0.0 - 0.3',
          'Boron_status': 'O.K.',
          'silica': 0.014632306820682279,
          'silica_range': '0 - 860',
          'silica_status': 'O.K.',
          'conductivity': '2.7',
          'conductivity_range': '',
          'conductivity_status': 'O.K.',
          'charge_bal': 2,
          'charge_bal_range': '(+/-5%)',
          'charge_bal_status': 'O.K.'
        },
        'feed_water': {
          'Ca++': 0.0000036433779266174166,
          'Mg++': 0.000007187465341131163,
          'Na+': 0.23026665133137378,
          'K+': 0.018208379375212393,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0,
          'Fe++': 0,
          'Mn++': 0,
          'SO4--': 0.000006865504396289949,
          'Cl-': 0.3705511244591328,
          'F-': 0,
          'NO3-': 0,
          'Br-': 0.008397755059213495,
          'PO4---': 0,
          'B-': 0,
          'SiO2': 0.000014632306820682278,
          'H2S': 0,
          'HCO3-': 0.20030396698703057,
          'CO2': 1.0260554976472689,
          'CO3--': 0.0000030583738479463928
        },
        'calc_param': {
          'product_flow_rate': 176.4294966785078,
          'product_resistivity': 16,
          'product_silica_guarantee_level': 5,
          'pred_pdt_silica': 0.00021948460231023436,
          'pred_max_pdt_Na': 1.37471310335234,
          'pred_max_pdt_Cl': 2.12183978995688,
          'pred_pdt_boron': 'NA',
          'pred_max_pdt_SO4': 2.7431346135543357,
          'max_allowable_recovery': 95.99540167391497,
          'num_stacks': 8,
          'current': 5.078405818024496,
          'voltage': 35.50428259820083,
          'e-factor': 5.122327976005685,
          'dcpower': 0.180305155311489,
          'acpower': 0.25757879330212713,
          'acenergy': 0.024332659054580784,
          'feed_pressure': 5.436853565596081,
          'pred_pdt_outlet_pressure': 3.352399138087014,
          'feed_inlet': 183.78952908371377,
          'concentrate_bleed': 4.578996495306529,
          'electrode_bleed': 2.800012328067487
        },
        'electrode_gas_gen': {
          'h2_expected': 38.647,
          'cl2_expected': '<0.0259',
          'h2_max': 316.576,
          'cl2_max': 0.21216,
          'cl2_exp_kg': '<0.000111',
          'cl2_max_kg': 0.00091,
          'h2_explosion_limit': 4,
          'cl2_exposure_limit': 0.00005,
          'h2_design_sf': 100,
          'cl2_design_sf': 100,
          'fan_size_h2_cmh': 0.47,
          'fan_size_h2_cfm': 0.28,
          'fan_size_cl2_cmh': 25.46,
          'fan_size_cl2_cfm': 14.99
        },
        'dilution_output': {
          'current_stack': 0.6,
          'voltage': 35.50428259820083,
          'max_all_recovery': 95.99540167391497,
          'energy_cons': 0.024332659054580784,
          'feed_flow': 183.78952908371377,
          'feed_pressure': 5.436853565596081,
          'prod_flow': 176.4294966785078,
          'prod_pressure': 3.352399138087014,
          'conc_bleed_flow': 4.578996495306529,
          'electrode_bleed_flow': 2.800012328067487,
          'max_conc_inlet_press': 3.05946212681964,
          'max_conc_outlet_press': 2.368615840118431,
          'max_electrode_bleed_press': 4.046385393535652
        },
        'err_list': []
      },
      'unit_type': 'EDI'
    },
    'project_details': {
      'db_version': 4.08,
      'DateOfChange': '2023-01-20 18:30:00+00:00',
      'project_name': '3pass_RO_EDI',
      'file_name': '3pRO_ConcRecycleToP2_EDI(SWfeed)',
      'last_update': '2023-10-13',
      'cloud_version': '5.0'
    },
    'ro_hp': {
      'ro_dict': {
        'RO-HP_1': {
          'grid-data': [
            {
              'stage': 1,
              'pressureVessels': 14,
              'elementsperVessel': 7,
              'application': 'Seawater RO',
              'elementGroup': 'High Rejection',
              'elementModel': 'AD-400,34',
              'elementAge': '0.00',
              'fluxAnnual': '5.00',
              'saltPassageAnnual': '5.00',
              'permeatePressure': '0.00',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00'
            },
            {
              'stage': 2,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 3,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 4,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 5,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 6,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 7,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 8,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            }
          ],
          'elementParameters': {
            'Area': 0,
            'Nano(0)': '0',
            'Nano(1)': '0',
            'Nano(2)': '0',
            'Nano(3)': '0',
            'Nano(4)': '0',
            'Nano(x)': ''
          },
          'recyclePermeate': false,
          'roTypes': false,
          'roInputDetails': {
            'splitPermeate': 0,
            'permeateBypass': 0
          },
          'recovery': '36.57'
        },
        'RO-HP_2': {
          'grid-data': [
            {
              'stage': 1,
              'pressureVessels': 4,
              'elementsperVessel': 6,
              'application': 'BW RO PA',
              'elementGroup': 'High Rejection',
              'elementModel': 'AG-440',
              'elementAge': '0.00',
              'fluxAnnual': '2.00',
              'saltPassageAnnual': '2.00',
              'permeatePressure': '0.00',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00'
            },
            {
              'stage': 2,
              'pressureVessels': 2,
              'elementsperVessel': 6,
              'application': 'BW RO PA',
              'elementGroup': 'High Rejection',
              'elementModel': 'AG-440',
              'elementAge': '0.00',
              'fluxAnnual': '2.00',
              'saltPassageAnnual': '2.00',
              'permeatePressure': '0.00',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00'
            },
            {
              'stage': 3,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 4,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 5,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 6,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 7,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 8,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            }
          ],
          'elementParameters': {},
          'recyclePermeate': false,
          'roTypes': false,
          'roInputDetails': {
            'splitPermeate': 0,
            'permeateBypass': 0
          },
          'recovery': '78.87'
        },
        'RO-HP_3': {
          'grid-data': [
            {
              'stage': 1,
              'pressureVessels': 3,
              'elementsperVessel': 7,
              'application': 'BW RO PA',
              'elementGroup': 'Low Energy, HR',
              'elementModel': 'AK-440',
              'elementAge': '0.00',
              'fluxAnnual': '2.00',
              'saltPassageAnnual': '2.00',
              'permeatePressure': '5.44',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00'
            },
            {
              'stage': 2,
              'pressureVessels': 1,
              'elementsperVessel': 7,
              'application': 'BW RO PA',
              'elementGroup': 'Low Energy, HR',
              'elementModel': 'AK-440',
              'elementAge': '0.00',
              'fluxAnnual': '2.00',
              'saltPassageAnnual': '2.00',
              'permeatePressure': '5.44',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00'
            },
            {
              'stage': 3,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 4,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 5,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 6,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 7,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            },
            {
              'stage': 8,
              'pressureVessels': 0,
              'elementsperVessel': 0,
              'application': '',
              'elementGroup': '',
              'elementModel': '',
              'elementAge': 0,
              'fluxAnnual': 0,
              'saltPassageAnnual': 0,
              'permeatePressure': 0,
              'interStageBoostPressure': 0,
              'boostEnergyEfficiency': 0,
              'interStagePressureLoss': 0
            }
          ],
          'elementParameters': {},
          'recyclePermeate': false,
          'roTypes': false,
          'roInputDetails': {
            'splitPermeate': 0,
            'permeateBypass': 0
          },
          'recovery': '87.5'
        }
      },
      'abFactor': 0
    }
  }
};
export const invoiceData1 = {
  'report_dict': {
    'coverpage_dict': {
      'project_info': {
        'a_b_option': 'NA',
        'system_units': {
          'Volume Flow': 'm3/hr',
          'Pressure': 'atm',
          'Temperature': '°C',
          'Liquid Volume': 'l',
          'Flux': 'lmh',
          'Power': 'kW'
        },
        'datatime created': '30/10/2023 (10:41 IST)',
        'project name': 'clro_pilot',
        'engineer': '',
        'location': '',
        'phone': '',
        'notes': '',
        'filename': 'CLRO_pilot_30Oct2023-sharedFile.json',
        'datatime modified': '11/12/2023 (18:50 IST)'
      },
      'spec_flow': {
        'type': 'Feed_1',
        'flow_rate': '1.0000000799999993 m3/hr'
      },
      'version': {
        'prog_version': 'NA',
        'prog_last_update': 'NA',
        'db_version': 'NA',
        'db_last_update': 'NA'
      },
      'flow_bal': {
        'unit id (stream no.)': {
          '0': '-',
          'incoming_feeds': [
            'Feed_1 (1)'
          ],
          'product': [
            'Product_1 (3)'
          ],
          'waste': [
            'Waste_1 (4)'
          ]
        },
        'flow': {
          '0': 'm3/hr',
          'incoming_feeds': [
            1.0000000799999993
          ],
          'product': [
            0.9500000759999992
          ],
          'waste': [
            0.05000000399999999
          ]
        },
        'flow-total': {
          '0': 'm3/hr',
          'incoming_feeds': 1.0000000799999993,
          'product': 0.9500000759999992,
          'waste': 0.05000000399999999
        },
        'flowsheet_recovery': 95
      },
      'flow_summary': {
        'Type': [
          'CLRO'
        ],
        'ID': {
          'CLRO': [
            'CLRO_1'
          ]
        },
        'Recovery': {
          'CLRO_1': 95
        },
        'Feed': {
          'CLRO_1': 1.0000000799999993
        },
        'Product': {
          'CLRO_1': 0.9500000759999992
        },
        'Waste': {
          'CLRO_1': 0.05000000399999999
        },
        'Electrode': {}
      }
    },
    'flowsheet_config_dict': {
      'source': {
        'Feed': 1
      },
      'sink': {
        'Product': 1,
        'Waste': 1
      },
      'mixer_splitter': {},
      'unit_op': {
        'CLRO': 1
      },
      'pump': {}
    },
    'feed_product_waste_summary': {
      'Category': {
        '0': 'Information',
        '2': 'Ion Concentration',
        '3': 'Stream Property',
        '4': 'Saturation Data'
      },
      'Feed_1': {
        'Information': 4,
        'Ion Concentration': {
          'Ca++': 48.23,
          'Mg++': 6.3,
          'Na+': 109.12,
          'K+': 2.19,
          'NH4+': 0,
          'Ba++': 0.38,
          'Sr++': 0.46,
          'Fe++': 0.8,
          'Mn++': 0.03,
          'SO4--': 10.46,
          'Cl-': 158.54,
          'F-': 0.16,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'B-': 0.4,
          'SiO2': 26.2,
          'H2S': 0,
          'HCO3-': 187.36,
          'CO2': 27.1,
          'CO3--': 0.12,
          'tds': 550.75
        },
        'Stream Property': {
          'Flow': 1.0000000799999993,
          'Pressure': 0,
          'Temperature': 25,
          'pH': 7,
          'Alkalinity': 153.9,
          'Conductivity at 25°C': '846',
          'Hardness': 146.48279863,
          'Density': 997.4,
          'Ionic Strength': 0.009398981547655652,
          'Osm.Pressure': 0.35
        },
        'Saturation Data': {
          'BaSO4': '241.65',
          'CaF2': '0.18',
          'CaSO4': '0.27',
          'Mg(OH)2': '0.00',
          'SiO2': '20.93',
          'SrSO4': '0.19',
          'Struvite': '0.000',
          'LSI': '-0.45',
          'S&DI': '-0.83'
        }
      },
      'Product_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 0.2041572620542818,
          'Mg++': 0.012193256667387192,
          'Na+': 0.3465195380915155,
          'K+': 0.005528528708433712,
          'NH4+': 0,
          'Ba++': 0.0016045718664442123,
          'Sr++': 0.00196909277922934,
          'Fe++': 0.0034703323765073674,
          'Mn++': 0.00012983320910546885,
          'SO4--': 0.006063105019411182,
          'Cl-': 0.6720913402176756,
          'F-': 0.0006882282725522555,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'B-': 0.010853940184532899,
          'SiO2': 0.12715312974086482,
          'H2S': 0,
          'HCO3-': 0.4980351209799493,
          'CO2': 0.555394263411375,
          'CO3--': 0.00003373167524934933,
          'tds': 1.8904910118431397
        },
        'Stream Property': {
          'Flow': 0.9500000759999992,
          'Pressure': 0,
          'Temperature': 25,
          'pH': 6.1589195487246755,
          'Alkalinity': 0.37447702347242096,
          'Conductivity at 25°C': '3.5',
          'Hardness': 0.5600543376203756,
          'Density': 997.0015640688512,
          'Ionic Strength': 0.00002957039254862716,
          'Osm.Pressure': 0
        },
        'Saturation Data': {
          'BaSO4': '0.08',
          'CaF2': '0.00',
          'CaSO4': '0.00',
          'Mg(OH)2': '0.00',
          'SiO2': '0.08',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '-6.08',
          'S&DI': '-6.60'
        }
      },
      'Waste_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 965.014225474956,
          'Mg++': 126.33043516160575,
          'Na+': 2185.508365864697,
          'K+': 43.890238210050114,
          'NH4+': 0,
          'Ba++': 7.6033393510223535,
          'Sr++': 9.203532344635185,
          'Fe++': 16.005268420434994,
          'Mn++': 0.6002033741461006,
          'SO4--': 210.0193605423038,
          'Cl-': 3172.1426753299124,
          'F-': 3.2011651382860697,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'B-': 7.8285522716597775,
          'SiO2': 523.9148239228881,
          'H2S': 0,
          'HCO3-': 3754.083449927859,
          'CO2': 533.5718580787743,
          'CO3--': 2.9592543208467603,
          'tds': 11028.304889655305
        },
        'Stream Property': {
          'Flow': 0.05000000399999999,
          'Pressure': 9.752983760386826,
          'Temperature': 25,
          'pH': 6.84296550948884,
          'Alkalinity': 3084.60878678605,
          'Conductivity at 25°C': '13973',
          'Hardness': 2930.1586824490064,
          'Density': 1004.7874133619167,
          'Ionic Strength': 0.1888021711711259,
          'Osm.Pressure': 6.63
        },
        'Saturation Data': {
          'BaSO4': '7356.25',
          'CaF2': '416.78',
          'CaSO4': '10.98',
          'Mg(OH)2': '0.00',
          'SiO2': '402.81',
          'SrSO4': '5.00',
          'Struvite': '0.000',
          'LSI': '1.06',
          'S&DI': '1.30'
        }
      },
      'Parameter': {
        'Information': 'Water Source',
        'Ion Concentration': [
          'Ca++',
          'Mg++',
          'Na+',
          'K+',
          'NH4+',
          'Ba++',
          'Sr++',
          'Fe++',
          'Mn++',
          'SO4--',
          'Cl-',
          'F-',
          'NO3-',
          'Br-',
          'PO4---',
          'B-',
          'SiO2',
          'H2S',
          'HCO3-',
          'CO2',
          'CO3--',
          'tds'
        ],
        'Stream Property': [
          'Flow',
          'Pressure',
          'Temperature',
          'pH',
          'Alkalinity',
          'Conductivity at 25°C',
          'Hardness',
          'Density',
          'Ionic Strength',
          'Osm.Pressure'
        ],
        'Saturation Data': [
          'BaSO4',
          'CaF2',
          'CaSO4',
          'Mg(OH)2',
          'SiO2',
          'SrSO4',
          'Struvite',
          'LSI',
          'S&DI'
        ]
      },
      'Units': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 'mg/L',
          'Mg++': 'mg/L',
          'Na+': 'mg/L',
          'K+': 'mg/L',
          'NH4+': 'mg/L',
          'Ba++': 'mg/L',
          'Sr++': 'mg/L',
          'Fe++': 'mg/L',
          'Mn++': 'mg/L',
          'SO4--': 'mg/L',
          'Cl-': 'mg/L',
          'F-': 'mg/L',
          'NO3-': 'mg/L',
          'Br-': 'mg/L',
          'PO4---': 'mg/L',
          'B-': 'mg/L',
          'SiO2': 'mg/L',
          'H2S': 'mg/L',
          'HCO3-': 'mg/L',
          'CO2': 'mg/L',
          'CO3--': 'mg/L',
          'tds': 'mg/L'
        },
        'Stream Property': {
          'Flow': 'm3/hr',
          'Pressure': 'atm',
          'Temperature': '°C',
          'pH': '-',
          'Alkalinity': 'ppm as CaCO3',
          'Conductivity at 25°C': 'µS/cm',
          'Hardness': 'ppm as CaCO3',
          'Density': 'kg/m3',
          'Ionic Strength': '-',
          'Osm.Pressure': 'atm'
        },
        'Saturation Data': {
          'BaSO4': '%',
          'CaF2': '%',
          'CaSO4': '%',
          'Mg(OH)2': '%',
          'SiO2': '%',
          'SrSO4': '%',
          'Struvite': '%',
          'LSI': '-',
          'S&DI': '-'
        }
      },
      'Unit ID': [
        'Feed_1',
        'Product_1',
        'Waste_1'
      ]
    },
    'edi_summary': {},
    'cf_summary': {},
    'pump_summary': {
      'units': {
        'RO Unit Attached': '-',
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Feed Temperature': '°C',
        'Flow Rate': 'm3/hr',
        'Inlet Pressure': 'atm',
        'Discharge Pressure': 'atm',
        'Power Consumption': 'kW',
        'Pump Efficiency': '%',
        'Motor Efficiency': '%',
        'VFD Efficiency': '%'
      },
      'Total Pump Consumption (kW)': 0.3651636721054906,
      'HP_Pump_1': {
        'RO Unit Attached': 'CLRO_1, ',
        'Upstream unit': 'Feed_1',
        'Downstream unit': 'CLRO_1, ',
        'Feed Temperature': 25,
        'Flow Rate': 1.0000000799999993,
        'Inlet Pressure': 0,
        'Discharge Pressure': 10.752424289894227,
        'Power Consumption': 0.3651636721054906,
        'Combined Efficiency': 82.8768,
        'Pump Efficiency': 89,
        'Motor Efficiency': 96,
        'VFD Efficiency': 97
      },
      'Pump Unit ID': [
        'HP_Pump_1'
      ],
      'pump_nos': 1
    },
    'chem_dose_summary': {},
    'stripper_summary': {},
    'erd_summary': {},
    'ro_summary': {
      'ro_system_dict': {
        'units': {
          'Upstream unit': '-',
          'Downstream unit': '-',
          'Feed Flow': 'm3/hr',
          'Product Flow': 'm3/hr',
          'Concentrate Flow': 'm3/hr',
          'RO Unit Recovery': '%',
          'Average Flux': 'lmh',
          'Breakdown by Stage': 'lmh',
          'Interstage Pressure': 'atm',
          'Total Membrane Area': 'm2',
          'Feed Temperature': '°C',
          'Feed Pressure': 'atm',
          'Product Pressure *': 'atm',
          'Feed TDS': 'mg/L',
          'Feed pH': '-',
          'Permeate TDS': 'mg/L',
          'Permeate pH': '-',
          'Concentrate TDS': 'mg/L',
          'Concentrate pH': '-'
        },
        'CLRO_1': {
          'Upstream unit': 'HP_Pump_1',
          'Downstream unit': 'Product_1, Waste_1, ',
          'Feed Flow': 1.0000000799999993,
          'Product Flow': 0.9500000759999992,
          'Concentrate Flow': 0.05000000399999999,
          'RO Unit Recovery': 95,
          'Average Flux': 23.999999999999993,
          'Breakdown by Stage': '23.98957183031532, ',
          'Interstage Pressure': '10.752424289894227, ',
          'Total Membrane Area': 41.80500000000001,
          'Feed Temperature': 25,
          'Feed Pressure': 10.752424289894227,
          'Product Pressure *': 0,
          'Feed TDS': 550.75,
          'Feed pH': 7,
          'Permeate TDS': 1.8904910118431397,
          'Permeate pH': 6.1589195487246755,
          'Concentrate TDS': 11028.304889655305,
          'Concentrate pH': 6.84296550948884
        },
        'ro_nos': 1,
        'RO Unit ID': [
          'CLRO_1'
        ]
      },
      'ro_stage_dict': {
        'CLRO_1': {
          'Stage': {
            '1': {
              'Housing': 1,
              'Elements': 5,
              'Element Type': '-',
              'Flow': 2.711675675677842,
              'Perm.': 1.0028840503671337,
              'Conc.': 1.7088388910337384,
              '% Recovery': 36.9839232384028,
              'Flux': 23.98957183031532,
              'Feed Pressure': 10.752424289894227,
              'Pressure dp': 0.9994405295074014,
              'Feed TDS mg/L': 8321.947187649861,
              'Perm TDS mg/L': 67.34226736502096,
              'Last Elem Beta': 1.0716567210628825
            }
          }
        }
      }
    },
    'mixer_summary': {},
    'ro_elem_summary': {},
    'clro_elem_summary': {
      'units': {
        'Recovery': '%',
        'Feed Flow': 'm3/hr',
        'Feed Press': 'atm',
        'Feed TDS': 'mg/L',
        'Conc Flow': 'm3/hr',
        'Perm Flow': 'm3/hr',
        'Perm TDS': 'atm'
      },
      'CLRO_1': {
        'Elements': {
          'CC1': {
            '1': {
              'Recovery': 8.553186154660393,
              'Feed Flow': 2.7116756756778426,
              'Feed Press': 4.335825938198247,
              'Feed TDS': 550.7175170043253,
              'Conc Flow': 2.4797410072264716,
              'Perm Flow': 0.2319346684513709,
              'Perm TDS': 2.7736162211822584
            },
            '2': {
              'Recovery': 8.653950738835777,
              'Feed Flow': 2.4797410837790776,
              'Feed Press': 4.064304622285903,
              'Feed TDS': 602.020303451154,
              'Conc Flow': 2.265145511938164,
              'Perm Flow': 0.2145955718409138,
              'Perm TDS': 3.015757269724599
            },
            '3': {
              'Recovery': 8.796706778319509,
              'Feed Flow': 2.265145585810989,
              'Feed Press': 3.8285460221073517,
              'Feed TDS': 658.8160472764987,
              'Conc Flow': 2.0658873705251484,
              'Perm Flow': 0.19925821528584045,
              'Perm TDS': 3.303491043386272
            },
            '4': {
              'Recovery': 8.971632173754635,
              'Feed Flow': 2.065887442736364,
              'Feed Press': 3.6242648934281227,
              'Feed TDS': 722.0821404679521,
              'Conc Flow': 1.8805436202502714,
              'Perm Flow': 0.1853438224860925,
              'Perm TDS': 3.6506625359555565
            },
            '5': {
              'Recovery': 9.179072900704933,
              'Feed Flow': 1.880543691731599,
              'Feed Press': 3.447740041946459,
              'Feed TDS': 792.9228438790323,
              'Conc Flow': 1.7079272153379477,
              'Perm Flow': 0.1726164763936513,
              'Perm TDS': 4.073337788276007
            }
          },
          'CC Final': {
            '1': {
              'Recovery': 10.420129076190763,
              'Feed Flow': 2.711675675677842,
              'Feed Press': 10.752424289894227,
              'Feed TDS': 8321.947187649861,
              'Conc Flow': 2.429115570144543,
              'Perm Flow': 0.2825601055332992,
              'Perm TDS': 37.35876245189218
            },
            '2': {
              'Recovery': 9.840249940208631,
              'Feed Flow': 2.429124778626665,
              'Feed Press': 10.486083377567402,
              'Feed TDS': 9283.457293135449,
              'Conc Flow': 2.1900928290502617,
              'Perm Flow': 0.23903194957640347,
              'Perm TDS': 50.29461917072499
            },
            '3': {
              'Recovery': 9.005795219577067,
              'Feed Flow': 2.190102597931798,
              'Feed Press': 10.261021399009168,
              'Feed TDS': 10288.95907070185,
              'Conc Flow': 1.9928664428634228,
              'Perm Flow': 0.197236155068375,
              'Perm TDS': 68.62702859762067
            },
            '4': {
              'Recovery': 7.975687476135416,
              'Feed Flow': 1.9928763524397366,
              'Feed Press': 10.068507353117251,
              'Feed TDS': 11298.285862054567,
              'Conc Flow': 1.833930762783336,
              'Perm Flow': 0.15894558965640038,
              'Perm TDS': 94.52039722648297
            },
            '5': {
              'Recovery': 6.82193690119846,
              'Feed Flow': 1.8339403430960106,
              'Feed Press': 9.90117209851246,
              'Feed TDS': 12267.249861613493,
              'Conc Flow': 1.7088300900843783,
              'Perm Flow': 0.12511025301163237,
              'Perm TDS': 131.13180453681628
            }
          }
        },
        'Concentrations': {
          'Feed': {
            'Feed': {
              'Ca++': 48.23,
              'Mg++': 6.3,
              'Na+': 109.12,
              'K+': 2.19,
              'NH4+': 0,
              'Ba++': 0.38,
              'Sr++': 0.46,
              'Fe++': 0.8,
              'Mn++': 0.03,
              'SO4--': 10.46,
              'Cl-': 158.54,
              'F-': 0.16,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.4,
              'SiO2': 26.2,
              'H2S': 0,
              'HCO3-': 187.36,
              'CO2': 27.1,
              'CO3--': 0.12
            }
          },
          'Concentrate': {
            'Conc CC1': {
              'Ca++': 76.49884081270766,
              'Mg++': 9.994558980952755,
              'Na+': 172.96735361899505,
              'K+': 3.4714276553131866,
              'NH4+': 0,
              'Ba++': 0.6027292766020479,
              'Sr++': 0.7296093768488551,
              'Fe++': 1.2688682242355085,
              'Mn++': 0.04758267566476714,
              'SO4--': 16.598527784916072,
              'Cl-': 251.4026224110162,
              'F-': 0.25360051613956713,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.4014456195828189,
              'SiO2': 41.41464867220325,
              'H2S': 0,
              'HCO3-': 296.72116198638355,
              'CO2': 27.18415881640778,
              'CO3--': 0.3006115094334301
            },
            'Conc CCFinal': {
              'Ca++': 1150.9147445404585,
              'Mg++': 154.5636301514988,
              'Na+': 2635.867247369182,
              'K+': 53.31792914104783,
              'NH4+': 0,
              'Ba++': 9.069400696579118,
              'Sr++': 10.969025064896663,
              'Fe++': 19.05988027338979,
              'Mn++': 0.7148563171186615,
              'SO4--': 262.4895273751549,
              'Cl-': 3780.7194760068633,
              'F-': 3.8079400308245717,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.4576997544205131,
              'SiO2': 605.0671098743687,
              'H2S': 0,
              'HCO3-': 4381.165168624918,
              'CO2': 25.162134461352252,
              'CO3--': 85.754763283601
            },
            'Conc Total': {
              'Ca++': 965.014225474956,
              'Mg++': 126.33043516160575,
              'Na+': 2185.508365864697,
              'K+': 43.890238210050114,
              'NH4+': 0,
              'Ba++': 7.6033393510223535,
              'Sr++': 9.203532344635185,
              'Fe++': 16.005268420434994,
              'Mn++': 0.6002033741461006,
              'SO4--': 210.0193605423038,
              'Cl-': 3172.1426753299124,
              'F-': 3.2011651382860697,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 7.8285522716597775,
              'SiO2': 523.9148239228881,
              'H2S': 0,
              'HCO3-': 3754.083449927859,
              'CO2': 533.5718580787743,
              'CO3--': 2.9592543208467603
            }
          },
          'Permeate': {
            'Perm CC1': {
              'Ca++': 0.12241981695855482,
              'Mg++': 0.012643533247290752,
              'Na+': 0.4610546460170795,
              'K+': 0.009280706051833657,
              'NH4+': 0,
              'Ba++': 0.0009619420226031917,
              'Sr++': 0.001181937459546382,
              'Fe++': 0.002085573265135631,
              'Mn++': 0.00007800948076947999,
              'SO4--': 0.013527584164910574,
              'Cl-': 0.5074682189309883,
              'F-': 0.0007117015630173125,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.39748403000876914,
              'SiO2': 0.3078561867432365,
              'H2S': 0,
              'HCO3-': 1.4768697445699874,
              'CO2': 26.638244913798697,
              'CO3--': 0.000006195449260197245
            },
            'Perm CCFinal': {
              'Ca++': 7.444046442498287,
              'Mg++': 0.4404882488478466,
              'Na+': 12.616983370697895,
              'K+': 0.20095713751676383,
              'NH4+': 0,
              'Ba++': 0.058506468751747254,
              'Sr++': 0.07179733129014487,
              'Fe++': 0.12653501519879234,
              'Mn++': 0.0047339740536349855,
              'SO4--': 0.2195241168980559,
              'Cl-': 24.503451878610917,
              'F-': 0.025087843449916887,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.39190984117855576,
              'SiO2': 4.605226158927225,
              'H2S': 0,
              'HCO3-': 16.631967148511833,
              'CO2': 21.11364860262514,
              'CO3--': 0.001052389058409413
            },
            'Perm Total': {
              'Ca++': 0.2041572620542818,
              'Mg++': 0.012193256667387192,
              'Na+': 0.3465195380915155,
              'K+': 0.005528528708433712,
              'NH4+': 0,
              'Ba++': 0.0016045718664442123,
              'Sr++': 0.00196909277922934,
              'Fe++': 0.0034703323765073674,
              'Mn++': 0.00012983320910546885,
              'SO4--': 0.006063105019411182,
              'Cl-': 0.6720913402176756,
              'F-': 0.0006882282725522555,
              'NO3-': 0,
              'Br-': 0,
              'PO4---': 0,
              'B-': 0.010853940184532899,
              'SiO2': 0.12715312974086482,
              'H2S': 0,
              'HCO3-': 0.4980351209799493,
              'CO2': 0.555394263411375,
              'CO3--': 0.00003373167524934933
            }
          }
        }
      },
      'clro_nos': 1,
      'CLRO Unit ID': [
        'CLRO_1'
      ]
    },
    'system_units': {
      'Volume Flow': 'm3/hr',
      'Pressure': 'atm',
      'Temperature': '°C',
      'Liquid Volume': 'l',
      'Flux': 'lmh',
      'Power': 'kW'
    },
    'stream_output': {
      '1': {
        'flow': 1.0000000799999993,
        'temp': 25,
        'press': 0,
        'prop_dict': {
          'malk': 153.9,
          'ph': 7,
          'toc': 0,
          'temp': 25,
          'tds': 550.75,
          'flow': 1.0000000799999993,
          'press': 0,
          'hardness': 146.48279863,
          'density': 997.4,
          'ionic_str': 0.009398981547655652
        },
        'ppm_dict': {
          'Ca++': 48.23,
          'Mg++': 6.3,
          'Na+': 109.12,
          'K+': 2.19,
          'NH4+': 0,
          'Ba++': 0.38,
          'Sr++': 0.46,
          'Fe++': 0.8,
          'Mn++': 0.03,
          'SO4--': 10.46,
          'Cl-': 158.54,
          'F-': 0.16,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'B-': 0.4,
          'SiO2': 26.2,
          'H2S': 0,
          'HCO3-': 187.36,
          'CO2': 27.1,
          'CO3--': 0.12
        },
        'sat_indices': {
          'density': '997.4',
          'baso4': '241.65%',
          'caf2': '0.18%',
          'srso4': '0.19%',
          'lsi': '-0.45',
          'sdi': '-0.83',
          'caso4': '0.27%',
          'struvite': '0.000%',
          'sio2': '20.93%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.35,
          'conductivity': '846'
        },
        'molal_dict': {
          'H+': 1.0987218721139404e-7,
          'Ca++': 0.0012071540602139365,
          'Mg++': 0.0002600138024765027,
          'Na+': 0.0047611362577575835,
          'K+': 0.00005618767361757294,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0.000002775742291273871,
          'Sr++': 0.000005266305648540131,
          'Fe++': 0.000014370013303128186,
          'Mn++': 5.478418786158044e-7,
          'OH-': 1.1122697895166142e-7,
          'SO4--': 0.00010922433326982992,
          'HSO4-': 7.782427034464945e-10,
          'Cl-': 0.0044857735023577415,
          'F-': 0.000008447055143550612,
          'HF': 1.133012183606787e-9,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 2.3911613078567455e-7,
          'B(OH)3': 0.000036875553784726004,
          'H2SiO4--': 1.5561541795197057e-11,
          'H3SiO4-': 5.727231601109274e-7,
          'H4SiO4': 0.0004368425235429616,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0030802160344370385,
          'CO2': 0.0006176102224734327,
          'CO3--': 0.000001940099181143971,
          'Total': 0
        },
        'ionic_strength': 0.009398981547655652,
        'hardness': 146.48279863,
        'label': '[ HP_Pump_1 ] Feed'
      },
      '2': {
        'flow': 1.0000000799999993,
        'temp': 25,
        'press': 10.752424289894227,
        'prop_dict': {
          'malk': 153.9,
          'ph': 7,
          'toc': 0,
          'temp': 25,
          'tds': 550.75,
          'flow': 1.0000000799999993,
          'press': 10.752424289894227,
          'hardness': 146.48279863,
          'density': 997.4,
          'ionic_str': 0.009398981547655652
        },
        'ppm_dict': {
          'Ca++': 48.23,
          'Mg++': 6.3,
          'Na+': 109.12,
          'K+': 2.19,
          'NH4+': 0,
          'Ba++': 0.38,
          'Sr++': 0.46,
          'Fe++': 0.8,
          'Mn++': 0.03,
          'SO4--': 10.46,
          'Cl-': 158.54,
          'F-': 0.16,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'B-': 0.4,
          'SiO2': 26.2,
          'H2S': 0,
          'HCO3-': 187.36,
          'CO2': 27.1,
          'CO3--': 0.12
        },
        'sat_indices': {
          'density': '997.4',
          'baso4': '241.65%',
          'caf2': '0.18%',
          'srso4': '0.19%',
          'lsi': '-0.45',
          'sdi': '-0.83',
          'caso4': '0.27%',
          'struvite': '0.000%',
          'sio2': '20.93%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.35,
          'conductivity': '846'
        },
        'molal_dict': {
          'H+': 1.0987218721139404e-7,
          'Ca++': 0.0012071540602139365,
          'Mg++': 0.0002600138024765027,
          'Na+': 0.0047611362577575835,
          'K+': 0.00005618767361757294,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0.000002775742291273871,
          'Sr++': 0.000005266305648540131,
          'Fe++': 0.000014370013303128186,
          'Mn++': 5.478418786158044e-7,
          'OH-': 1.1122697895166142e-7,
          'SO4--': 0.00010922433326982992,
          'HSO4-': 7.782427034464945e-10,
          'Cl-': 0.0044857735023577415,
          'F-': 0.000008447055143550612,
          'HF': 1.133012183606787e-9,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)4-': 2.3911613078567455e-7,
          'B(OH)3': 0.000036875553784726004,
          'H2SiO4--': 1.5561541795197057e-11,
          'H3SiO4-': 5.727231601109274e-7,
          'H4SiO4': 0.0004368425235429616,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.0030802160344370385,
          'CO2': 0.0006176102224734327,
          'CO3--': 0.000001940099181143971,
          'Total': 0
        },
        'ionic_strength': 0.009398981547655652,
        'hardness': 146.48279863,
        'label': '[ HP_Pump_1 ] Outlet'
      },
      '3': {
        'flow': 0.9500000759999992,
        'temp': 25,
        'press': 0,
        'prop_dict': {
          'flow': 0.9500000759999992,
          'temp': 25,
          'press': 0,
          'tds': 1.8904910118431397,
          'ph': 6.1589195487246755,
          'toc': 0.000020845068353803264,
          'malk': 0.37447702347242096,
          'hardness': 0.5600543376203756,
          'density': 997.0015640688512,
          'ionic_str': 0.00002957039254862716
        },
        'ppm_dict': {
          'Ca++': 0.2041572620542818,
          'Mg++': 0.012193256667387192,
          'Na+': 0.3465195380915155,
          'K+': 0.005528528708433712,
          'NH4+': 0,
          'Ba++': 0.0016045718664442123,
          'Sr++': 0.00196909277922934,
          'Fe++': 0.0034703323765073674,
          'Mn++': 0.00012983320910546885,
          'SO4--': 0.006063105019411182,
          'Cl-': 0.6720913402176756,
          'F-': 0.0006882282725522555,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'B-': 0.010853940184532899,
          'SiO2': 0.12715312974086482,
          'H2S': 0,
          'HCO3-': 0.4980351209799493,
          'CO2': 0.555394263411375,
          'CO3--': 0.00003373167524934933
        },
        'sat_indices': {
          'density': '997.0',
          'baso4': '0.08%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-6.08',
          'sdi': '-6.60',
          'caso4': '0.00%',
          'struvite': '0.000%',
          'sio2': '0.08%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0,
          'conductivity': '3.5'
        },
        'molal_dict': {
          'H+': 6.982135374220333e-7,
          'Ca++': 0.000005109327906276947,
          'Mg++': 5.031866081484141e-7,
          'Na+': 0.000015117979058688244,
          'K+': 1.418273573213062e-7,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 1.1719476822248636e-8,
          'Sr++': 2.2540726767372872e-8,
          'Fe++': 6.232922983669854e-8,
          'Mn++': 2.370681825992501e-9,
          'OH-': 1.4627434001634676e-8,
          'SO4--': 6.330106568302504e-8,
          'HSO4-': 4.137698803214564e-12,
          'Cl-': 0.000019014297858271513,
          'F-': 3.6298079603417484e-8,
          'HF': 3.729233412774897e-11,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0.0000010061425470195337,
          'B(OH)4-': 8.506588641008884e-10,
          'H2SiO4--': 1.0938073135975033e-15,
          'H3SiO4-': 3.6278088888281307e-10,
          'H4SiO4': 0.00000212226185531662,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.00000818679852657403,
          'CO2': 0.000012657706025368666,
          'CO3--': 5.638018605676377e-10
        },
        'ionic_strength': 0.00002957039254862716,
        'hardness': 0.5600543376203756,
        'label': '[ Product_1 ]'
      },
      '4': {
        'flow': 0.05000000399999999,
        'temp': 25,
        'press': 9.752983760386826,
        'prop_dict': {
          'flow': 0.05000000399999999,
          'temp': 25,
          'press': 9.752983760386826,
          'tds': 11028.304889655305,
          'ph': 6.84296550948884,
          'toc': 0.074161228672914,
          'malk': 3084.60878678605,
          'hardness': 2930.1586824490064,
          'density': 1004.7874133619167,
          'ionic_str': 0.1888021711711259
        },
        'ppm_dict': {
          'Ca++': 965.014225474956,
          'Mg++': 126.33043516160575,
          'Na+': 2185.508365864697,
          'K+': 43.890238210050114,
          'NH4+': 0,
          'Ba++': 7.6033393510223535,
          'Sr++': 9.203532344635185,
          'Fe++': 16.005268420434994,
          'Mn++': 0.6002033741461006,
          'SO4--': 210.0193605423038,
          'Cl-': 3172.1426753299124,
          'F-': 3.2011651382860697,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'B-': 7.8285522716597775,
          'SiO2': 523.9148239228881,
          'H2S': 0,
          'HCO3-': 3754.083449927859,
          'CO2': 533.5718580787743,
          'CO3--': 2.9592543208467603
        },
        'sat_indices': {
          'density': '1004.8',
          'baso4': '7356.25%',
          'caf2': '416.78%',
          'srso4': '5.00%',
          'lsi': '1.06',
          'sdi': '1.30',
          'caso4': '10.98%',
          'struvite': '0.000%',
          'sio2': '402.81%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 6.63,
          'conductivity': '13973'
        },
        'molal_dict': {
          'H+': 1.7528028777575282e-7,
          'Ca++': 0.02422961716398753,
          'Mg++': 0.00523035593558239,
          'Na+': 0.09566044122905903,
          'K+': 0.0011296197409167764,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0.00005571438222153384,
          'Sr++': 0.00010569882799287208,
          'Fe++': 0.0002884015196393616,
          'Mn++': 0.000010995115731857454,
          'OH-': 9.387038858000816e-8,
          'SO4--': 0.0021999625419484217,
          'HSO4-': 1.1433192479580495e-8,
          'Cl-': 0.09003649904117207,
          'F-': 0.00016953434613497376,
          'HF': 2.396142334439071e-8,
          'NO3-': 0,
          'Br-': 0,
          'PO4---': 0,
          'HPO4--': 0,
          'H2PO4-': 0,
          'H3PO4': 0,
          'B(OH)3': 0.0007243517072022832,
          'B(OH)4-': 0.000004324293558635945,
          'H2SiO4--': 3.4211096912929754e-10,
          'H3SiO4-': 0.000010578205967851902,
          'H4SiO4': 0.008763888089869684,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.061911588779361905,
          'CO2': 0.012200016692214079,
          'CO3--': 0.00004962320133800745
        },
        'ionic_strength': 0.1888021711711259,
        'hardness': 2930.1586824490064,
        'label': '[ Waste_1 ]'
      }
    },
    'errors': [],
    'stream_input_dict': {
      '1': {
        'source': 'Feed_1',
        'destination': 'HP_Pump_1'
      },
      '2': {
        'source': 'HP_Pump_1',
        'destination': 'CLRO_1'
      },
      '3': {
        'source': 'CLRO_1',
        'destination': 'Product_1'
      },
      '4': {
        'source': 'CLRO_1',
        'destination': 'Waste_1'
      }
    },
    'edi_output_dict': {},
    'project_details': {
      'db_version': 4.08,
      'DateOfChange': '2023-01-20 18:30:00+00:00',
      'project_name': 'clro_pilot',
      'file_name': 'CLRO_pilot_30Oct2023',
      'last_update': '2023-10-13',
      'cloud_version': '5.0'
    },
    'ro_hp': {
      'ro_dict': {
        'CLRO_1': {
          'grid-data': [
            {
              'stage': 1,
              'pressureVessels': 1,
              'elementsperVessel': 5,
              'spacersperVessel': 1,
              'application': 'BW RO PA',
              'elementGroup': 'Ultra Low Energy',
              'elementModel': 'AP-90',
              'elementAge': '0.00',
              'fluxAnnual': '0.75',
              'saltPassageAnnual': '0.02',
              'permeatePressure': '0.00'
            }
          ],
          'elementParameters': {
            'Area': 0,
            'Nano(0)': '0',
            'Nano(1)': '0',
            'Nano(2)': '0',
            'Nano(3)': '0',
            'Nano(4)': '0',
            'Nano(x)': ''
          },
          'recyclePermeate': false,
          'roTypes': false,
          'roInputDetails': {
            'splitPermeate': 0,
            'permeateBypass': 0
          },
          'recovery': '95',
          'totalHoldupVol': '50',
          'permeateFlux': '24',
          'recoveryPerCircuit': '37'
        }
      },
      'abFactor': 1
    }
  }
};
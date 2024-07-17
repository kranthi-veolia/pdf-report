/* eslint-disable max-len */

export const invoiceData = {
  'report_dict': {
    'coverpage_dict': {
      'project_info': {
        'a_b_option': 'NA',
        'system_units': {
          'Volume Flow': 'm3/hr',
          'Pressure': 'bar',
          'Temperature': '°C',
          'Liquid Volume': 'm3',
          'Flux': 'lmh',
          'Power': 'kW'
        },
        'datatime created': '12/12/2023 (11:43 IST)',
        'project name': '1pRO Tutorial file(Brackishwater feed)',
        'engineer': '',
        'location': '',
        'phone': '',
        'notes': '',
        'filename': '1pRO (Brackishwater feed).json',
        'datatime modified': '03/04/2024 (10:55 IST)'
      },
      'spec_flow': {
        'type': [
          'Feed_1'
        ],
        'flow_rate': [
          '60.00000011999995 m3/hr'
        ]
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
            'Product_1 (4)'
          ],
          'waste': [
            'Waste_1 (5)'
          ]
        },
        'flow': {
          '0': 'm3/hr',
          'incoming_feeds': [
            60.00000011999995
          ],
          'product': [
            47.97417917846359
          ],
          'waste': [
            12.025859101316133
          ]
        },
        'flow-total': {
          '0': 'm3/hr',
          'incoming_feeds': 60.00000011999995,
          'product': 47.97417917846359,
          'waste': 12.025859101316133
        },
        'flowsheet_recovery': 79.95696513752544
      },
      'flow_summary': {
        'Type': [
          'RO_HP'
        ],
        'ID': {
          'RO_HP': [
            'ROHP_1'
          ]
        },
        'Recovery': {
          'ROHP_1': 80
        },
        'Feed': {
          'ROHP_1': 60.00000011999995
        },
        'Product': {
          'ROHP_1': 47.97417917846359
        },
        'Waste': {
          'ROHP_1': 12.025859101316133
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
        'CF': 1,
        'RO_HP': 1
      },
      'pump': {
        'HP Pump (Wired)': 1
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
        'Information': 'Brackish Surfacewater (Conventional)',
        'Ion Concentration': {
          'Ca++': 114.75,
          'Mg++': 11.48,
          'Na+': 67.64,
          'K+': 1.15,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.01,
          'Fe++': 0.11,
          'Mn++': 0,
          'SO4--': 57.38,
          'Cl-': 263.93,
          'F-': 0.01,
          'NO3-': 0.11,
          'Br-': 0,
          'PO4---': 0.57,
          'B-': 0,
          'SiO2': 5.74,
          'H2S': 0,
          'HCO3-': 0,
          'CO2': 0,
          'CO3--': 0,
          'tds': 583.57
        },
        'Stream Property': {
          'Flow': 60.00000011999995,
          'Pressure': 2.0000000066549997,
          'Temperature': 20,
          'pH': 7.2,
          'Alkalinity': 50,
          'Conductivity at 25°C': '1115',
          'Hardness': 334.06464509,
          'Density': 998.6,
          'Ionic Strength': 0.013613135273876496,
          'Osm.Pressure': 0.3546374999999999
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '2.63',
          'Mg(OH)2': '0.00',
          'SiO2': '4.58',
          'SrSO4': '0.02',
          'Struvite': '0.000',
          'LSI': '-0.49',
          'S&DI': '-0.85'
        }
      },
      'Product_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 1.1729217724661436,
          'Mg++': 0.11748834107282312,
          'Na+': 0.6127196886935389,
          'K+': 0.006930073067577585,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.00010382775744785328,
          'Fe++': 0.001163538743340275,
          'Mn++': 0,
          'SO4--': 0.32341584889687386,
          'Cl-': 2.7238707145402357,
          'F-': 0.00011353398724210846,
          'NO3-': 0.006493546039696666,
          'Br-': 0,
          'PO4---': 0.0041129070517417375,
          'B-': 0,
          'SiO2': 0.060439698200599516,
          'H2S': 0,
          'HCO3-': 0.919522169110273,
          'CO2': 5.79181644129188,
          'CO3--': 0.000010764799744377295,
          'tds': 5.949306424427277
        },
        'Stream Property': {
          'Flow': 47.97417917846359,
          'Pressure': 0,
          'Temperature': 20,
          'pH': 5.434829611545802,
          'Alkalinity': 0.568236580456123,
          'Conductivity at 25°C': '14',
          'Hardness': 3.412955908754703,
          'Density': 998.16046367472,
          'Ionic Strength': 0.0001368064133268919,
          'Osm.Pressure': 0.010132499999999997
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '0.01',
          'Mg(OH)2': '0.00',
          'SiO2': '0.03',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '-5.93',
          'S&DI': '-6.40'
        }
      },
      'Waste_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 567.827403160677,
          'Mg++': 56.80690358545404,
          'Na+': 335.02270940688015,
          'K+': 5.709891935822787,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.04947743747673192,
          'Fe++': 0.5441663089705704,
          'Mn++': 0,
          'SO4--': 284.98800026447145,
          'Cl-': 1305.9537145242266,
          'F-': 0.04943871688277067,
          'NO3-': 0.522903568163144,
          'Br-': 0,
          'PO4---': 2.8274156330734823,
          'B-': 0,
          'SiO2': 28.39668790606592,
          'H2S': 0,
          'HCO3-': 296.8114203449482,
          'CO2': 6.507653312319872,
          'CO3--': 1.3770519898313651,
          'tds': 2886.887184782944
        },
        'Stream Property': {
          'Flow': 12.025859101316133,
          'Pressure': 8.050448644276498,
          'Temperature': 20,
          'pH': 7.769889449047242,
          'Alkalinity': 247.19077294908857,
          'Conductivity at 25°C': '5074',
          'Hardness': 1651.9668727917156,
          'Density': 1000.2285923552646,
          'Ionic Strength': 0.06745987253537064,
          'Osm.Pressure': 1.6617299999999995
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.09',
          'CaSO4': '19.17',
          'Mg(OH)2': '0.00',
          'SiO2': '22.56',
          'SrSO4': '0.09',
          'Struvite': '0.000',
          'LSI': '1.09',
          'S&DI': '1.01'
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
          'Pressure': 'bar',
          'Temperature': '°C',
          'pH': '-',
          'Alkalinity': 'ppm as CaCO3',
          'Conductivity at 25°C': 'µS/cm',
          'Hardness': 'ppm as CaCO3',
          'Density': 'kg/m3',
          'Ionic Strength': '-',
          'Osm.Pressure': 'bar'
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
    'cf_summary': {
      'units': {
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Feed Temperature': '°C',
        'Flow Capacity': 'm3/hr',
        'Filter Type': '-',
        'Number of Filters': 'No.',
        'Design Flow Per TIE': 'gpm',
        'Actual Flow per TIE': 'gpm',
        'Inlet Pressure': 'bar',
        'Outlet Pressure': 'bar',
        'Pressure Drop': 'bar'
      },
      'CF_1': {
        'Upstream unit': 'Feed_1',
        'Downstream unit': 'HPP_1, ',
        'Feed Temperature': 20,
        'Flow Capacity': 60.00000011999995,
        'Filter Type': 'RO.Zs 05-20',
        'Number of Filters': 27,
        'Design Flow Per TIE': 1.135619999999997,
        'Actual Flow per TIE': 1.1111111133333302,
        'Inlet Pressure': 2.0000000066549997,
        'Outlet Pressure': 1.909794478669758,
        'Pressure Drop': 0.09020552798524156
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
        'Flow Rate': 'm3/hr',
        'Inlet Pressure': 'bar',
        'Discharge Pressure': 'bar',
        'Power Consumption': 'kW',
        'Combined Efficiency': '%',
        'Pump Efficiency': '%',
        'Motor Efficiency': '%',
        'VFD Efficiency': '%'
      },
      'Total Power Consumption (kW)': 18.615174522282356,
      'HPP_1': {
        'RO Unit Attached': 'ROHP_1',
        'Upstream unit': 'CF_1',
        'Downstream unit': 'ROHP_1, ',
        'Feed Temperature': 20,
        'Flow Rate': 60.00000011999995,
        'Inlet Pressure': 1.909794478669758,
        'Discharge Pressure': 9.231573949810274,
        'Power Consumption': 18.615174522282356,
        'Combined Efficiency': 65.553861958335,
        'Pump Efficiency': 70.39718852913983,
        'Motor Efficiency': 96,
        'VFD Efficiency': 97
      },
      'Pump Unit ID': [
        'HPP_1'
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
          'Interstage Pressure': 'bar',
          'Total Membrane Area': 'm2',
          'Feed Temperature': '°C',
          'Feed Pressure': 'bar',
          'Product Pressure *': 'bar',
          'Feed TDS': 'mg/L',
          'Feed pH': '-',
          'Permeate TDS': 'mg/L',
          'Permeate pH': '-',
          'Concentrate TDS': 'mg/L',
          'Concentrate pH': '-'
        },
        'ROHP_1': {
          'Upstream unit': 'HPP_1',
          'Downstream unit': 'Product_1, Waste_1, ',
          'Feed Flow': 60.00000011999995,
          'Product Flow': 47.97417917846359,
          'Concentrate Flow': 12.025859101316133,
          'RO Unit Recovery': 80,
          'Average Flux': 33.55402827313943,
          'Breakdown by Stage': '25.1655212048546, 21.392105764982404, ',
          'Interstage Pressure': '8.588941567953082, ',
          'Total Membrane Area': 2006.6400000000015,
          'Feed Temperature': 20,
          'Feed Pressure': 9.231573949810274,
          'Product Pressure *': 0,
          'Feed TDS': 583.57,
          'Feed pH': 7.2,
          'Permeate TDS': 5.949306424427277,
          'Permeate pH': 5.434829611545802,
          'Concentrate TDS': 2886.887184782944,
          'Concentrate pH': 7.769889449047242
        },
        'ro_nos': 1,
        'RO Unit ID': [
          'ROHP_1'
        ]
      },
      'ro_stage_dict': {
        'ROHP_1': {
          'Stage': {
            '1': {
              'Housing': 6,
              'Elements': 6,
              'Element Type': '-',
              'Flow': 60.00000011999995,
              'Perm.': 33.66542764703319,
              'Conc.': 26.334585770394437,
              '% Recovery': 56.1090459661706,
              'Flux': 25.1655212048546,
              'Feed Pressure': 9.231573949810274,
              'Pressure dp': 0.6426323818571903,
              'Feed TDS mg/L': 583.5609882346786,
              'Perm TDS mg/L': 3.9233441919412786,
              'Last Elem Beta': 1.1552546726804414
            },
            '2': {
              'Housing': 3,
              'Elements': 6,
              'Element Type': '-',
              'Flow': 26.334585770394437,
              'Perm.': 14.308751704092863,
              'Conc.': 12.025859101316133,
              '% Recovery': 54.33444759240862,
              'Flux': 21.392105764982404,
              'Feed Pressure': 8.588941567953082,
              'Pressure dp': 0.5384929236765844,
              'Feed TDS mg/L': 1324.5470790325603,
              'Perm TDS mg/L': 10.758818545313236,
              'Last Elem Beta': 1.1354161879205111
            }
          }
        }
      }
    },
    'mixer_summary': {},
    'ro_elem_summary': {
      'units': {
        'Flow': {
          'Feed': 'm3/hr',
          'Permeate': 'm3/hr'
        },
        'Pressure': {
          'Feed': 'bar',
          'Net Driving': 'bar',
          'Delta Pressure': 'bar',
          'Feed Osm. Pressure': 'bar'
        },
        'Other': {
          'Recovery': '%',
          'Beta (Conc. Pol.)': '',
          'Flux': 'lmh',
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
      'ROHP_1': {
        'Stage 1': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 10.000000019999991,
                'Permeate': 0.9872934472760583
              },
              'Pressure': {
                'Feed': 9.231573949810274,
                'Net Driving': 8.73898381455308,
                'Delta Pressure': 0.15901996132403917,
                'Feed Osm. Pressure': 0.3560504945896548
              },
              'Other': {
                'Recovery': 9.872934453014723,
                'Beta (Conc. Pol.)': 1.1140885546595005,
                'Flux': 26.566471936428172,
                'A-Value': 8.430932986643013
              },
              'Stream Property': {
                'pH': 5.289734244089054,
                'Alkalinity': 0.00000519910086908144,
                'Conductivity at 25°C': 6.881406285735866,
                'Hardness': 1.3018450115382667,
                'Density': 998.1580750804811,
                'Ionic Strength': 0.00005774733695361454
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.44730710238473953,
                'Mg++': 0.04487238028711632,
                'Na+': 0.2723842275553508,
                'K+': 0.002995205882673033,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00003954946109780251,
                'Fe++': 0.00044259060157948694,
                'Mn++': 0,
                'SO4--': 0.14433040917903597,
                'Cl-': 1.0528211164811005,
                'F-': 0.00004864683500894347,
                'NO3-': 0.0025993265179237884,
                'Br-': 0,
                'PO4---': 0.0019438291759272229,
                'B-': 0,
                'SiO2': 0.027162680339646014,
                'H2S': 0,
                'HCO3-': 0.6318901056191776,
                'CO2': 5.585616121260783,
                'CO3--': 0.000005222906951539782,
                'TDS': 2.6288423932273286
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '2.99',
                'Mg(OH)2': '0.00',
                'SiO2 ': '5.08',
                'SrSO4 ': '0.02',
                'Struvite ': '0.000',
                'LSI': '-0.38',
                'S&DI': '-0.72'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 9.012706802295487,
                'Permeate': 0.965646741103616
              },
              'Pressure': {
                'Feed': 9.072553988486234,
                'Net Driving': 8.54355947885245,
                'Delta Pressure': 0.13618603007993615,
                'Feed Osm. Pressure': 0.3935366339724804
              },
              'Other': {
                'Recovery': 10.714281095415986,
                'Beta (Conc. Pol.)': 1.121772985134269,
                'Flux': 25.99157333698833,
                'A-Value': 8.437162446701588
              },
              'Stream Property': {
                'pH': 5.30763619062552,
                'Alkalinity': 0.000005894799800732688,
                'Conductivity at 25°C': 7.583644541075727,
                'Hardness': 1.5220694843041078,
                'Density': 998.1583281373328,
                'Ionic Strength': 0.00006604447577575525
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.5229743388808434,
                'Mg++': 0.05246358831511063,
                'Na+': 0.3103424465601153,
                'K+': 0.0034682704704816184,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.000046264147254235785,
                'Fe++': 0.0005180582566042388,
                'Mn++': 0,
                'SO4--': 0.16537644363383652,
                'Cl-': 1.2274031393320595,
                'F-': 0.000055549496989108,
                'NO3-': 0.0030156181625647584,
                'Br-': 0,
                'PO4---': 0.002201289966037271,
                'B-': 0,
                'SiO2': 0.031046994016660733,
                'H2S': 0,
                'HCO3-': 0.6617066476174137,
                'CO2': 5.609499865692664,
                'CO3--': 0.000005709884639983363,
                'TDS': 2.9806243587406107
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '3.44',
                'Mg(OH)2': '0.00',
                'SiO2 ': '5.69',
                'SrSO4 ': '0.02',
                'Struvite ': '0.000',
                'LSI': '-0.26',
                'S&DI': '-0.58'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 8.047060320438941,
                'Permeate': 0.9453304349736623
              },
              'Pressure': {
                'Feed': 8.936367958406297,
                'Net Driving': 8.35893467956476,
                'Delta Pressure': 0.11490589927370588,
                'Feed Osm. Pressure': 0.4389226128465859
              },
              'Other': {
                'Recovery': 11.747525149930746,
                'Beta (Conc. Pol.)': 1.127662750413863,
                'Flux': 25.4458701130518,
                'A-Value': 8.442461008351712
              },
              'Stream Property': {
                'pH': 5.329442012403286,
                'Alkalinity': 0.000006762548552176989,
                'Conductivity at 25°C': 8.481345357558341,
                'Hardness': 1.8022206144423218,
                'Density': 998.1586490557852,
                'Ionic Strength': 0.00007658119685986834
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.61923190957816,
                'Mg++': 0.06212045727409162,
                'Na+': 0.3578554263809279,
                'K+': 0.004051433813207143,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00005481497630500528,
                'Fe++': 0.000614282028568049,
                'Mn++': 0,
                'SO4--': 0.19156520127731105,
                'Cl-': 1.4493268487646194,
                'F-': 0.00006427537256891656,
                'NO3-': 0.0035421818045586885,
                'Br-': 0,
                'PO4---': 0.002523910819309501,
                'B-': 0,
                'SiO2': 0.03585658736189185,
                'H2S': 0,
                'HCO3-': 0.6999293457623245,
                'CO2': 5.638828000348131,
                'CO3--': 0.0000063643490343441435,
                'TDS': 3.4267430395628784
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '4.02',
                'Mg(OH)2': '0.00',
                'SiO2 ': '6.44',
                'SrSO4 ': '0.02',
                'Struvite ': '0.000',
                'LSI': '-0.12',
                'S&DI': '-0.43'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 7.101730187251988,
                'Permeate': 0.9254151473341572
              },
              'Pressure': {
                'Feed': 8.82146205913259,
                'Net Driving': 8.1791268644546,
                'Delta Pressure': 0.09516399412781106,
                'Feed Osm. Pressure': 0.4950536302902684
              },
              'Other': {
                'Recovery': 13.030840695628374,
                'Beta (Conc. Pol.)': 1.1349227799925596,
                'Flux': 24.911581284919716,
                'A-Value': 8.446893919771396
              },
              'Stream Property': {
                'pH': 5.356671755467143,
                'Alkalinity': 0.00000788125007013991,
                'Conductivity at 25°C': 9.668106634248902,
                'Hardness': 2.1704116366703703,
                'Density': 998.1590697156751,
                'Ionic Strength': 0.00009040949945635705
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.7457401032477978,
                'Mg++': 0.07481156032073932,
                'Na+': 0.4193221773877292,
                'K+': 0.004792734583748766,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00006606579419830192,
                'Fe++': 0.0007410591000876431,
                'Mn++': 0,
                'SO4--': 0.22518907937926544,
                'Cl-': 1.7408231531425817,
                'F-': 0.00007568905920085802,
                'NO3-': 0.004230051968936275,
                'Br-': 0,
                'PO4---': 0.0029415728565755596,
                'B-': 0,
                'SiO2': 0.041999172900240585,
                'H2S': 0,
                'HCO3-': 0.750776109684983,
                'CO2': 5.675830726692107,
                'CO3--': 0.000007287328493392698,
                'TDS': 4.011515816754578
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '4.78',
                'Mg(OH)2': '0.00',
                'SiO2 ': '7.40',
                'SrSO4 ': '0.03',
                'Struvite ': '0.000',
                'LSI': '0.02',
                'S&DI': '-0.26'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 6.176315404002416,
                'Permeate': 0.9049207952874327
              },
              'Pressure': {
                'Feed': 8.72629806500478,
                'Net Driving': 7.995565150391018,
                'Delta Pressure': 0.07697417593695427,
                'Feed Osm. Pressure': 0.5662582962285488
              },
              'Other': {
                'Recovery': 14.651466709440067,
                'Beta (Conc. Pol.)': 1.143937620735277,
                'Flux': 24.362970532301336,
                'A-Value': 8.45052639298061
              },
              'Stream Property': {
                'pH': 5.391577926080008,
                'Alkalinity': 0.000009380684765385789,
                'Conductivity at 25°C': 11.30186078517303,
                'Hardness': 2.673651662474976,
                'Density': 998.1596433712216,
                'Ionic Strength': 0.0001092878082951923
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.9186530311693871,
                'Mg++': 0.09215599178525463,
                'Na+': 0.502004101703061,
                'K+': 0.005770360646394602,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00008146283520956394,
                'Fe++': 0.0009148145162971372,
                'Mn++': 0,
                'SO4--': 0.2699991755775917,
                'Cl-': 2.1390553167878172,
                'F-': 0.00009123333741025615,
                'NO3-': 0.005163948403346394,
                'Br-': 0,
                'PO4---': 0.003503435219573607,
                'B-': 0,
                'SiO2': 0.05013842481453221,
                'H2S': 0,
                'HCO3-': 0.8214335820924437,
                'CO2': 5.724050740197447,
                'CO3--': 0.000008668459032670403,
                'TDS': 4.808973547347351
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.01',
                'CaSO4': '5.81',
                'Mg(OH)2': '0.00',
                'SiO2 ': '8.66',
                'SrSO4 ': '0.03',
                'Struvite ': '0.000',
                'LSI': '0.18',
                'S&DI': '-0.07'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 5.2713950671121905,
                'Permeate': 0.882298046362752
              },
              'Pressure': {
                'Feed': 8.649323889067826,
                'Net Driving': 7.794975192642345,
                'Delta Pressure': 0.06038232111474314,
                'Feed Osm. Pressure': 0.6594503409375525
              },
              'Other': {
                'Recovery': 16.737467693653592,
                'Beta (Conc. Pol.)': 1.1552546726804414,
                'Flux': 23.759907590148686,
                'A-Value': 8.453424900589146
              },
              'Stream Property': {
                'pH': 5.437657324914358,
                'Alkalinity': 0.000011492612818560211,
                'Conductivity at 25°C': 13.669997595475365,
                'Hardness': 3.397032133958423,
                'Density': 998.1604663693468,
                'Ionic Strength': 0.00013639866543198735
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.1672136703625358,
                'Mg++': 0.1170830671714064,
                'Na+': 0.6189059528935418,
                'K+': 0.007122060244312475,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00010362639331696698,
                'Fe++': 0.001165337791384403,
                'Mn++': 0,
                'SO4--': 0.332643436196157,
                'Cl-': 2.7112924984520896,
                'F-': 0.00011351963409864941,
                'NO3-': 0.006496044142914407,
                'Br-': 0,
                'PO4---': 0.004297029556568757,
                'B-': 0,
                'SiO2': 0.06144681808192372,
                'H2S': 0,
                'HCO3-': 0.925158361199708,
                'CO2': 5.789536773895866,
                'CO3--': 0.000010901323298740407,
                'TDS': 5.9530523234432575
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.01',
                'CaSO4': '7.28',
                'Mg(OH)2': '0.00',
                'SiO2 ': '10.38',
                'SrSO4 ': '0.04',
                'Struvite ': '0.000',
                'LSI': '0.37',
                'S&DI': '0.14'
              }
            }
          }
        },
        'Stage 2': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 8.778195256798146,
                'Permeate': 0.8625525305833686
              },
              'Pressure': {
                'Feed': 8.588941567953082,
                'Net Driving': 7.614948576291041,
                'Delta Pressure': 0.1320012271454551,
                'Feed Osm. Pressure': 0.7862990619507715
              },
              'Other': {
                'Recovery': 9.826080479531111,
                'Beta (Conc. Pol.)': 1.1105772613818539,
                'Flux': 23.222359068605122,
                'A-Value': 8.457484593362027
              },
              'Stream Property': {
                'pH': 5.46856093435748,
                'Alkalinity': 0.000013052013653924323,
                'Conductivity at 25°C': 15.48234825144877,
                'Hardness': 3.95229231105639,
                'Density': 998.1610878955343,
                'Ionic Strength': 0.0001569392674712758
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.3583101008366052,
                'Mg++': 0.13603275852063657,
                'Na+': 0.7031521476372972,
                'K+': 0.008082387669513214,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00011998014050845288,
                'Fe++': 0.0013411156164423463,
                'Mn++': 0,
                'SO4--': 0.3720831618481322,
                'Cl-': 3.150643194191206,
                'F-': 0.00012979490145724235,
                'NO3-': 0.007532862688703402,
                'Br-': 0,
                'PO4---': 0.0046350681467906265,
                'B-': 0,
                'SiO2': 0.07014640461919266,
                'H2S': 0,
                'HCO3-': 1.0048373630546055,
                'CO2': 5.850430378261695,
                'CO3--': 0.000012750153772968539,
                'TDS': 6.817059090024863
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.02',
                'CaSO4': '8.28',
                'Mg(OH)2': '0.00',
                'SiO2 ': '11.50',
                'SrSO4 ': '0.04',
                'Struvite ': '0.000',
                'LSI': '0.47',
                'S&DI': '0.26'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 7.915643504921709,
                'Permeate': 0.8374166163499474
              },
              'Pressure': {
                'Feed': 8.456940340807629,
                'Net Driving': 7.3904048089259975,
                'Delta Pressure': 0.11320416191649736,
                'Feed Osm. Pressure': 0.8683484661834469
              },
              'Other': {
                'Recovery': 10.579261380698446,
                'Beta (Conc. Pol.)': 1.1146197304047039,
                'Flux': 22.551384588484,
                'A-Value': 8.462658936775737
              },
              'Stream Property': {
                'pH': 5.506315292676288,
                'Alkalinity': 0.000015031471274851579,
                'Conductivity at 25°C': 17.770878199722365,
                'Hardness': 4.643129048528255,
                'Density': 998.1618726633659,
                'Ionic Strength': 0.00018279925438058678
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.5957830052667217,
                'Mg++': 0.15978102775328995,
                'Na+': 0.812511791560394,
                'K+': 0.009303904908910324,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00014101003061173817,
                'Fe++': 0.0015768980990315232,
                'Mn++': 0,
                'SO4--': 0.4284306253341521,
                'Cl-': 3.6974734997807976,
                'F-': 0.0001510037154563411,
                'NO3-': 0.0087977000242959,
                'Br-': 0,
                'PO4---': 0.005318754407679081,
                'B-': 0,
                'SiO2': 0.08061982612660959,
                'H2S': 0,
                'HCO3-': 1.1080912637804365,
                'CO2': 5.907555275791294,
                'CO3--': 0.000015389031467452035,
                'TDS': 7.907995699819854
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.02',
                'CaSO4': '9.50',
                'Mg(OH)2': '0.00',
                'SiO2 ': '12.85',
                'SrSO4 ': '0.05',
                'Struvite ': '0.000',
                'LSI': '0.57',
                'S&DI': '0.39'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 7.078227817170952,
                'Permeate': 0.8117955774066735
              },
              'Pressure': {
                'Feed': 8.343736178891131,
                'Net Driving': 7.162106282509697,
                'Delta Pressure': 0.0958243138593673,
                'Feed Osm. Pressure': 0.9666254197739299
              },
              'Other': {
                'Recovery': 11.468909992376233,
                'Beta (Conc. Pol.)': 1.118817683382166,
                'Flux': 21.866136297188127,
                'A-Value': 8.467069872118742
              },
              'Stream Property': {
                'pH': 5.550009333508288,
                'Alkalinity': 0.000017524134866347013,
                'Conductivity at 25°C': 20.7093700896996,
                'Hardness': 5.525810382855264,
                'Density': 998.1628739218469,
                'Ionic Strength': 0.00021581651376757153
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.899221158288365,
                'Mg++': 0.19011246917257643,
                'Na+': 0.9506181879715232,
                'K+': 0.010823401181501636,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00016789705672770329,
                'Fe++': 0.0018785549498648545,
                'Mn++': 0,
                'SO4--': 0.4989342095928423,
                'Cl-': 4.396023279983706,
                'F-': 0.0001780493837786716,
                'NO3-': 0.010403627323336169,
                'Br-': 0,
                'PO4---': 0.006176522966342788,
                'B-': 0,
                'SiO2': 0.09368915350201677,
                'H2S': 0,
                'HCO3-': 1.2416413057289517,
                'CO2': 5.977763187895246,
                'CO3--': 0.000019144476906754222,
                'TDS': 9.29988696157844
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.03',
                'CaSO4': '11.05',
                'Mg(OH)2': '0.00',
                'SiO2 ': '14.50',
                'SrSO4 ': '0.06',
                'Struvite ': '0.000',
                'LSI': '0.69',
                'S&DI': '0.53'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 6.266433369195923,
                'Permeate': 0.7845686243352289
              },
              'Pressure': {
                'Feed': 8.247911865031764,
                'Net Driving': 6.92134754313178,
                'Delta Pressure': 0.07985953896613422,
                'Feed Osm. Pressure': 1.0862963088884021
              },
              'Other': {
                'Recovery': 12.520178195653594,
                'Beta (Conc. Pol.)': 1.123689105579826,
                'Flux': 21.140344493556853,
                'A-Value': 8.470777166604563
              },
              'Stream Property': {
                'pH': 5.600958351909989,
                'Alkalinity': 0.000020753463911783763,
                'Conductivity at 25°C': 24.58971043088133,
                'Hardness': 6.686283509930674,
                'Density': 998.1641882806138,
                'Ionic Strength': 0.0002591901834461266
              },
              'Permeate Ion Concentration': {
                'Ca++': 2.298187514454731,
                'Mg++': 0.22997016049098631,
                'Na+': 1.1300698367255275,
                'K+': 0.012765223441283731,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.0002032675983596815,
                'Fe++': 0.002275644343596444,
                'Mn++': 0,
                'SO4--': 0.589604875194195,
                'Cl-': 5.31429945682915,
                'F-': 0.0002135536403055716,
                'NO3-': 0.012500112473564423,
                'Br-': 0,
                'PO4---': 0.007282635867875441,
                'B-': 0,
                'SiO2': 0.11045541658832006,
                'H2S': 0,
                'HCO3-': 1.419183835120289,
                'CO2': 6.0661822023677185,
                'CO3--': 0.000024722605687470547,
                'TDS': 11.12703625537387
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.04',
                'CaSO4': '13.03',
                'Mg(OH)2': '0.00',
                'SiO2 ': '16.55',
                'SrSO4 ': '0.07',
                'Struvite ': '0.000',
                'LSI': '0.81',
                'S&DI': '0.68'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 5.481866148456317,
                'Permeate': 0.7543066886966897
              },
              'Pressure': {
                'Feed': 8.168052326065629,
                'Net Driving': 6.656227763315716,
                'Delta Pressure': 0.06532908228492407,
                'Feed Osm. Pressure': 1.2347421121525435
              },
              'Other': {
                'Recovery': 13.760034781387375,
                'Beta (Conc. Pol.)': 1.1292475335843544,
                'Flux': 20.337924375140965,
                'A-Value': 8.473840948314214
              },
              'Stream Property': {
                'pH': 5.660749587139786,
                'Alkalinity': 0.000025078312512982085,
                'Conductivity at 25°C': 29.884077322462797,
                'Hardness': 8.26405251990946,
                'Density': 998.1659721432122,
                'Ionic Strength': 0.0003181043830522021
              },
              'Permeate Ion Concentration': {
                'Ca++': 2.840674193841743,
                'Mg++': 0.28412663956654494,
                'Na+': 1.3711486658860694,
                'K+': 0.015326435085021043,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00025138414266717544,
                'Fe++': 0.0028161227287684175,
                'Mn++': 0,
                'SO4--': 0.7100170701985746,
                'Cl-': 6.562697502981586,
                'F-': 0.00026176942409080557,
                'NO3-': 0.015327427266716955,
                'Br-': 0,
                'PO4---': 0.008755138092191793,
                'B-': 0,
                'SiO2': 0.13267515720923564,
                'H2S': 0,
                'HCO3-': 1.6627607180093424,
                'CO2': 6.18062398267125,
                'CO3--': 0.000033435075553478364,
                'TDS': 13.606871659508107
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.06',
                'CaSO4': '15.64',
                'Mg(OH)2': '0.00',
                'SiO2 ': '19.17',
                'SrSO4 ': '0.08',
                'Struvite ': '0.000',
                'LSI': '0.94',
                'S&DI': '0.84'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 4.727561245340977,
                'Permeate': 0.7189438730539683
              },
              'Pressure': {
                'Feed': 8.102723243780705,
                'Net Driving': 6.350136840583574,
                'Delta Pressure': 0.05227459950420741,
                'Feed Osm. Pressure': 1.4227277477631128
              },
              'Other': {
                'Recovery': 15.207499929535324,
                'Beta (Conc. Pol.)': 1.1354161879205111,
                'Flux': 19.40835415994328,
                'A-Value': 8.476322630460848
              },
              'Stream Property': {
                'pH': 5.731344663692949,
                'Alkalinity': 0.000031107032696079614,
                'Conductivity at 25°C': 37.39685365881713,
                'Hardness': 10.497931202918794,
                'Density': 998.1684925352251,
                'Ionic Strength': 0.0004014183135411115
              },
              'Permeate Ion Concentration': {
                'Ca++': 3.6088528403969007,
                'Mg++': 0.3607427719448273,
                'Na+': 1.7083116727718428,
                'K+': 0.01883653551574149,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.0003195392711401691,
                'Fe++': 0.003581963131645656,
                'Mn++': 0,
                'SO4--': 0.8762478744841439,
                'Cl-': 8.330234508036327,
                'F-': 0.0003299736690946402,
                'NO3-': 0.019292168243498577,
                'Br-': 0,
                'PO4---': 0.010791185709685264,
                'B-': 0,
                'SiO2': 0.16330932227008757,
                'H2S': 0,
                'HCO3-': 2.009709797829157,
                'CO2': 6.333189094950147,
                'CO3--': 0.000047894152750556364,
                'TDS': 17.110608047426844
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.09',
                'CaSO4': '19.17',
                'Mg(OH)2': '0.00',
                'SiO2 ': '22.56',
                'SrSO4 ': '0.09',
                'Struvite ': '0.000',
                'LSI': '1.09',
                'S&DI': '1.01'
              }
            }
          }
        }
      },
      'ro_nos': 1,
      'RO Unit ID': [
        'ROHP_1'
      ]
    },
    'clro_elem_summary': {},
    'clro_overview': {},
    'argo_summary': {
      'ROHP_1': {
        'Dosed In': 'ROHP_1',
        'Antiscalant': 'UNTREATED',
        'Dosage kgperday in Feed': 'N.A',
        'Dosage ppm in Feed': 'N.A'
      }
    },
    'system_units': {
      'Volume Flow': 'm3/hr',
      'Pressure': 'bar',
      'Temperature': '°C',
      'Liquid Volume': 'm3',
      'Flux': 'lmh',
      'Power': 'kW'
    },
    'stream_output': {
      '1': {
        'flow': 60.00000011999995,
        'temp': 20,
        'press': 2.0000000066549997,
        'prop_dict': {
          'malk': 50,
          'ph': 7.2,
          'toc': 0,
          'temp': 20,
          'tds': 583.57,
          'flow': 60.00000011999995,
          'press': 2.0000000066549997,
          'hardness': 334.06464509,
          'density': 998.6,
          'ionic_str': 0.013613135273876496
        },
        'ppm_dict': {
          'Ca++': 114.75,
          'Mg++': 11.48,
          'Na+': 67.64,
          'K+': 1.15,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.01,
          'Fe++': 0.11,
          'Mn++': 0,
          'SO4--': 57.38,
          'Cl-': 263.93,
          'F-': 0.01,
          'NO3-': 0.11,
          'Br-': 0,
          'PO4---': 0.57,
          'B-': 0,
          'SiO2': 5.74,
          'H2S': 0,
          'HCO3-': 0,
          'CO2': 0,
          'CO3--': 0
        },
        'sat_indices': {
          'density': '998.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.02%',
          'lsi': '-0.49',
          'sdi': '-0.85',
          'caso4': '2.63%',
          'struvite': '0.000%',
          'sio2': '4.58%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.3546374999999999,
          'conductivity': '1115'
        },
        'molal_dict': {
          'H+': 7.035650253769334e-8,
          'Ca++': 0.002868877900998412,
          'Mg++': 0.00047327294075199595,
          'Na+': 0.002948017379626649,
          'K+': 0.000029471939020923237,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1435684446077e-7,
          'Fe++': 0.0000019736666456832183,
          'Mn++': 0,
          'OH-': 1.2105761489288604e-7,
          'SO4--': 0.0005984993597995057,
          'HSO4-': 2.2040689883461356e-9,
          'Cl-': 0.007459523629104121,
          'F-': 5.273811887296781e-7,
          'HF': 3.994568724294658e-11,
          'NO3-': 0.0000017776177960805648,
          'Br-': 0,
          'PO4---': 3.522932877691263e-11,
          'HPO4--': 0.0000034212812119721413,
          'H2PO4-': 0.0000025924684255661266,
          'H3PO4': 1.8952869526892794e-11,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 3.8315983052872324e-12,
          'H3SiO4-': 1.5617881189306857e-7,
          'H4SiO4': 0.00009556729469637666,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000995618968299204,
          'CO2': 0.0001321980240673152,
          'CO3--': 9.382524737335849e-7,
          'Total': 0
        },
        'ionic_strength': 0.013613135273876496,
        'hardness': 334.06464509,
        'label': '[ Feed_1 ] Raw Feed'
      },
      '2': {
        'flow': 60.00000011999995,
        'temp': 20,
        'press': 1.909794478669758,
        'prop_dict': {
          'malk': 50,
          'ph': 7.2,
          'toc': 0,
          'temp': 20,
          'tds': 583.57,
          'flow': 60.00000011999995,
          'press': 1.909794478669758,
          'hardness': 334.06464509,
          'density': 998.6,
          'ionic_str': 0.013613135273876496
        },
        'ppm_dict': {
          'Ca++': 114.75,
          'Mg++': 11.48,
          'Na+': 67.64,
          'K+': 1.15,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.01,
          'Fe++': 0.11,
          'Mn++': 0,
          'SO4--': 57.38,
          'Cl-': 263.93,
          'F-': 0.01,
          'NO3-': 0.11,
          'Br-': 0,
          'PO4---': 0.57,
          'B-': 0,
          'SiO2': 5.74,
          'H2S': 0,
          'HCO3-': 0,
          'CO2': 0,
          'CO3--': 0
        },
        'sat_indices': {
          'density': '998.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.02%',
          'lsi': '-0.49',
          'sdi': '-0.85',
          'caso4': '2.63%',
          'struvite': '0.000%',
          'sio2': '4.58%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.3546374999999999,
          'conductivity': '1115'
        },
        'molal_dict': {
          'H+': 7.035650253769334e-8,
          'Ca++': 0.002868877900998412,
          'Mg++': 0.00047327294075199595,
          'Na+': 0.002948017379626649,
          'K+': 0.000029471939020923237,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1435684446077e-7,
          'Fe++': 0.0000019736666456832183,
          'Mn++': 0,
          'OH-': 1.2105761489288604e-7,
          'SO4--': 0.0005984993597995057,
          'HSO4-': 2.2040689883461356e-9,
          'Cl-': 0.007459523629104121,
          'F-': 5.273811887296781e-7,
          'HF': 3.994568724294658e-11,
          'NO3-': 0.0000017776177960805648,
          'Br-': 0,
          'PO4---': 3.522932877691263e-11,
          'HPO4--': 0.0000034212812119721413,
          'H2PO4-': 0.0000025924684255661266,
          'H3PO4': 1.8952869526892794e-11,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 3.8315983052872324e-12,
          'H3SiO4-': 1.5617881189306857e-7,
          'H4SiO4': 0.00009556729469637666,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000995618968299204,
          'CO2': 0.0001321980240673152,
          'CO3--': 9.382524737335849e-7,
          'Total': 0
        },
        'ionic_strength': 0.013613135273876496,
        'hardness': 334.06464509,
        'label': '[ HPP_1 ] Feed'
      },
      '3': {
        'flow': 60.00000011999995,
        'temp': 20,
        'press': 9.231573949810274,
        'prop_dict': {
          'malk': 50,
          'ph': 7.2,
          'toc': 0,
          'temp': 20,
          'tds': 583.57,
          'flow': 60.00000011999995,
          'press': 9.231573949810274,
          'hardness': 334.06464509,
          'density': 998.6,
          'ionic_str': 0.013613135273876496
        },
        'ppm_dict': {
          'Ca++': 114.75,
          'Mg++': 11.48,
          'Na+': 67.64,
          'K+': 1.15,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.01,
          'Fe++': 0.11,
          'Mn++': 0,
          'SO4--': 57.38,
          'Cl-': 263.93,
          'F-': 0.01,
          'NO3-': 0.11,
          'Br-': 0,
          'PO4---': 0.57,
          'B-': 0,
          'SiO2': 5.74,
          'H2S': 0,
          'HCO3-': 0.1,
          'CO2': 0,
          'CO3--': 0
        },
        'sat_indices': {
          'density': '998.6',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.02%',
          'lsi': '-0.49',
          'sdi': '-0.85',
          'caso4': '2.63%',
          'struvite': '0.000%',
          'sio2': '4.58%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.3546374999999999,
          'conductivity': '1115'
        },
        'molal_dict': {
          'H+': 7.035650253769334e-8,
          'Ca++': 0.002868877900998412,
          'Mg++': 0.00047327294075199595,
          'Na+': 0.002948017379626649,
          'K+': 0.000029471939020923237,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1435684446077e-7,
          'Fe++': 0.0000019736666456832183,
          'Mn++': 0,
          'OH-': 1.2105761489288604e-7,
          'SO4--': 0.0005984993597995057,
          'HSO4-': 2.2040689883461356e-9,
          'Cl-': 0.007459523629104121,
          'F-': 5.273811887296781e-7,
          'HF': 3.994568724294658e-11,
          'NO3-': 0.0000017776177960805648,
          'Br-': 0,
          'PO4---': 3.522932877691263e-11,
          'HPO4--': 0.0000034212812119721413,
          'H2PO4-': 0.0000025924684255661266,
          'H3PO4': 1.8952869526892794e-11,
          'B(OH)4-': 0,
          'B(OH)3': 0,
          'H2SiO4--': 3.8315983052872324e-12,
          'H3SiO4-': 1.5617881189306857e-7,
          'H4SiO4': 0.00009556729469637666,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.000995618968299204,
          'CO2': 0.0001321980240673152,
          'CO3--': 9.382524737335849e-7,
          'Total': 0
        },
        'ionic_strength': 0.013613135273876496,
        'hardness': 334.06464509,
        'label': '[ ROHP_1 ] Element Feed'
      },
      '4': {
        'flow': 47.97417917846359,
        'temp': 20,
        'press': 0,
        'prop_dict': {
          'flow': 47.97417917846359,
          'temp': 20,
          'press': 0,
          'tds': 5.949306424427277,
          'ph': 5.434829611545802,
          'toc': 0.000146943577988353,
          'malk': 0.568236580456123,
          'hardness': 3.412955908754703,
          'density': 998.16046367472,
          'ionic_str': 0.0001368064133268919
        },
        'ppm_dict': {
          'Ca++': 1.1729217724661436,
          'Mg++': 0.11748834107282312,
          'Na+': 0.6127196886935389,
          'K+': 0.006930073067577585,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.00010382775744785328,
          'Fe++': 0.001163538743340275,
          'Mn++': 0,
          'SO4--': 0.32341584889687386,
          'Cl-': 2.7238707145402357,
          'F-': 0.00011353398724210846,
          'NO3-': 0.006493546039696666,
          'Br-': 0,
          'PO4---': 0.0041129070517417375,
          'B-': 0,
          'SiO2': 0.060439698200599516,
          'H2S': 0,
          'HCO3-': 0.919522169110273,
          'CO2': 5.79181644129188,
          'CO3--': 0.000010764799744377295
        },
        'sat_indices': {
          'density': '998.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-5.93',
          'sdi': '-6.40',
          'caso4': '0.01%',
          'struvite': '0.000%',
          'sio2': '0.03%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.010132499999999997,
          'conductivity': '14'
        },
        'molal_dict': {
          'H+': 0.0000037239406088462,
          'Ca++': 0.00002932008545554687,
          'Mg++': 0.0000048428539395929075,
          'Na+': 0.000026700850141141832,
          'K+': 1.7757650171495607e-7,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 1.1871687326473807e-9,
          'Fe++': 2.0873668323039452e-8,
          'Mn++': 0,
          'OH-': 1.877157038239995e-9,
          'SO4--': 0.00000337190779109933,
          'HSO4-': 9.874842472830844e-10,
          'Cl-': 0.0000769725234243802,
          'F-': 5.957746568725559e-9,
          'HF': 2.940470905140301e-11,
          'NO3-': 1.0492148800613748e-7,
          'Br-': 0,
          'PO4---': 8.010339226518775e-17,
          'HPO4--': 7.369189134322351e-10,
          'H2PO4-': 4.262945561076022e-8,
          'H3PO4': 2.0674034961588603e-11,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 7.978222372436525e-18,
          'H3SiO4-': 2.523451041009328e-11,
          'H4SiO4': 0.0000010077546240524,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.00001509779686933269,
          'CO2': 0.00013184560140093205,
          'CO3--': 1.7971808825942864e-10
        },
        'ionic_strength': 0.0001368064133268919,
        'hardness': 3.412955908754703,
        'label': '[ Product_1 ]'
      },
      '5': {
        'flow': 12.025859101316133,
        'temp': 20,
        'press': 8.050448644276498,
        'prop_dict': {
          'flow': 12.025859101316133,
          'temp': 20,
          'press': 8.050448644276498,
          'tds': 2886.887184782944,
          'ph': 7.769889449047242,
          'toc': 0.005048641141711862,
          'malk': 247.19077294908857,
          'hardness': 1651.9668727917156,
          'density': 1000.2285923552646,
          'ionic_str': 0.06745987253537064
        },
        'ppm_dict': {
          'Ca++': 567.827403160677,
          'Mg++': 56.80690358545404,
          'Na+': 335.02270940688015,
          'K+': 5.709891935822787,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.04947743747673192,
          'Fe++': 0.5441663089705704,
          'Mn++': 0,
          'SO4--': 284.98800026447145,
          'Cl-': 1305.9537145242266,
          'F-': 0.04943871688277067,
          'NO3-': 0.522903568163144,
          'Br-': 0,
          'PO4---': 2.8274156330734823,
          'B-': 0,
          'SiO2': 28.39668790606592,
          'H2S': 0,
          'HCO3-': 296.8114203449482,
          'CO2': 6.507653312319872,
          'CO3--': 1.3770519898313651
        },
        'sat_indices': {
          'density': '1000.2',
          'baso4': '0.00%',
          'caf2': '0.09%',
          'srso4': '0.09%',
          'lsi': '1.09',
          'sdi': '1.01',
          'caso4': '19.17%',
          'struvite': '0.000%',
          'sio2': '22.56%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 1.6617299999999995,
          'conductivity': '5074'
        },
        'molal_dict': {
          'H+': 2.0341885563227435e-8,
          'Ca++': 0.014205820626671929,
          'Mg++': 0.002343481406346916,
          'Na+': 0.014611382005294216,
          'K+': 0.00014642976542813768,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 5.661870995061273e-7,
          'Fe++': 0.000009770198210650605,
          'Mn++': 0,
          'OH-': 4.956506294349862e-7,
          'SO4--': 0.0029745523373853376,
          'HSO4-': 2.1433405211146482e-9,
          'Cl-': 0.036934380100180436,
          'F-': 0.0000026092013184880043,
          'HF': 4.6489684503305544e-11,
          'NO3-': 0.000008455862605285107,
          'Br-': 0,
          'PO4---': 1.4912908394958664e-9,
          'HPO4--': 0.000025559385122518918,
          'H2PO4-': 0.0000042898265268001995,
          'H3PO4': 6.968208023533937e-12,
          'B(OH)3': 0,
          'B(OH)4-': 0,
          'H2SiO4--': 3.834009189406225e-10,
          'H3SiO4-': 0.0000032594780264003234,
          'H4SiO4': 0.00047061630986021554,
          'S--': 0,
          'HS-': 0,
          'H2S': 0,
          'HCO3-': 0.004877370824961176,
          'CO2': 0.00014826172875665507,
          'CO3--': 0.00002300858799403094
        },
        'ionic_strength': 0.06745987253537064,
        'hardness': 1651.9668727917156,
        'label': '[ Waste_1 ]'
      }
    },
    'errors': [
      {
        'name': 'ROHP_1',
        'data': [
          'WARNING!! High LSI. LSI > 0.0. Concentrate CaCO3 exceeds saturation in ROHP_1 Conc\n\nThe LSI (Langelier Saturation Index) for the system concentrate is a positive number. This means CaCO3 precipitation, and  subsequent loss of membrane productivity in the system as  designed is likely. A number of system design options exist to avoid CaCO3  saturation, including:\n 1) lower the system recovery, \n 2) acidify the feed by dosing with sulfuric, hydrochloric,  or other acid,\n 3) decrease the calcium concentration in the  feed by IX softening,\n 4) decrease the calcium and alkalinity  in the feed by lime or lime-soda ash softening, \n 5) reduce the likelihood of CaCO3 precipitation by injecting  a scale inhibitor in the feed (contact Veolia for advice  regarding scale inhibitor).\n',
          'WARNING!! High SDI. SDI > 0.0. Concentrate CaCO3 exceeds saturation in ROHP_1 Conc\n\nThe SDSI (Stiff & Davis Stability Index) for the system concentrate is a positive number. This means CaCO3 precipitation, and subsequent loss  of membrane productivity in the system, as designed is likely.  A number of system design options exist to avoid CaCO3 saturation including:\n 1) lower the system recovery, \n 2) acidify the feed by dosing with sulfuric, hydrochloric, or other acid, decrease the calcium concentration in the feed by IX softening, \n 3) decrease the calcium and alkalinity in the feed by lime or lime-soda ash softening, \n 4) reduce the likelyhood of CaCO3 precipitation by injecting a scale inhibitor in the feed (contact Veolia for advice regarding scale inhibitor).\n',
          'WARNING!! Concentrate Fe exceeds saturation (Based on Argo Analyzer results)'
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
        'destination': 'HPP_1'
      },
      '3': {
        'source': 'HPP_1',
        'destination': 'ROHP_1'
      },
      '4': {
        'source': 'ROHP_1',
        'destination': 'Product_1'
      },
      '5': {
        'source': 'ROHP_1',
        'destination': 'Waste_1'
      }
    },
    'edi_output_dict': {},
    'project_details': {
      'db_version': 4.13,
      'DateOfChange': '2023-12-01 00:00:00+00:00',
      'project_name': '1pRO Tutorial file(Brackishwater feed)',
      'file_name': '1pRO (Brackishwater feed)',
      'last_update': '2023-10-13',
      'cloud_version': '5.0'
    },
    'ro_hp': {
      'ro_dict': {
        'ROHP_1': {
          'grid-data': [
            {
              'stage': 1,
              'pressureVessels': 6,
              'elementsperVessel': 6,
              'application': 'BW RO PA',
              'elementGroup': 'Standard',
              'elementModel': 'AG8040F-400',
              'elementAge': '0.00',
              'fluxAnnual': '3.00',
              'saltPassageAnnual': '5.00',
              'permeatePressure': '0.00',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00',
              'elementModelNumber': 5
            },
            {
              'stage': 2,
              'pressureVessels': 3,
              'elementsperVessel': 6,
              'application': 'BW RO PA',
              'elementGroup': 'Standard',
              'elementModel': 'AG8040F-400',
              'elementAge': '0.00',
              'fluxAnnual': '3.00',
              'saltPassageAnnual': '5.00',
              'permeatePressure': '0.00',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00',
              'elementModelNumber': 5
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
            'nElementNumber': 5,
            'nType': 0,
            'strModel': 'AG8040F-400',
            'SelectionA': 'BW RO PA',
            'SelectionB': 'Standard',
            'passWordCode': '0,1,2,3,4,5,6',
            'strOsmonicsURL': '#specfiles\\AG Series.pdf#',
            'Area': 37.16,
            'Nano(3)': 0.000481938901538568,
            'Nano(4)': 40.8275783459266,
            'Nano(0)': 15.31039269,
            'Nano(2)': 99.65,
            'Nano(1)': 2000,
            'Nano(x)': 'NaCl',
            'EID': 48,
            'flowsheet_link': 'https://estore.watertechnologies.com/document/document/contentdownload/?document_name=FS1262EN.pdf&language=English&security=Public',
            'AValue': 0.0010555540476181683,
            'Bvalue': 0.000037442299202204826,
            'DPCoef': 0.54,
            'RedPexp': 0.57
          },
          'recyclePermeate': false,
          'roTypes': false,
          'roInputDetails': {
            'splitPermeate': 0,
            'permeateBypass': 0
          },
          'recovery': '80',
          'roMachine': '',
          'unit_type': 'RO_HP'
        }
      },
      'abFactor': 0
    },
    'ediOutputData': []
  }
};
export const invoiceData3 = {
  'report_dict': {
    'coverpage_dict': {
      'project_info': {
        'a_b_option': 'NA',
        'system_units': {
          'Volume Flow': 'm3/hr',
          'Pressure': 'atm',
          'Temperature': '°C',
          'Liquid Volume': 'gal',
          'Flux': 'gfd',
          'Power': 'kW'
        },
        'datatime created': '16/05/2023',
        'project name': 'Acid_H2SStripper_Caustic_1pRO',
        'engineer': '',
        'location': 'Standard Flowsheet',
        'phone': '',
        'notes': ''
      },
      'spec_flow': {
        'type': 'Feed_1',
        'flow_rate': '50.00000003999996 m3/hr'
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
            'Product_1 (8)'
          ],
          'waste': [
            'Waste_1 (7)'
          ]
        },
        'flow': {
          '0': 'm3/hr',
          'incoming_feeds': [
            50.00000003999996
          ],
          'product': [
            37.47990294643638
          ],
          'waste': [
            12.520103057048113
          ]
        },
        'flow-total': {
          '0': 'm3/hr',
          'incoming_feeds': 50.00000003999996,
          'product': 37.47990294643638,
          'waste': 12.520103057048113
        },
        'flowsheet_recovery': 74.95980583290498
      },
      'flow_summary': {
        'Type': [
          'RO_HP'
        ],
        'ID': {
          'RO_HP': [
            'RO-HP_1'
          ]
        },
        'Recovery': {
          'RO-HP_1': 75
        },
        'Feed': {
          'RO-HP_1': 50.00000003999996
        },
        'Product': {
          'RO-HP_1': 37.47990294643638
        },
        'Waste': {
          'RO-HP_1': 12.520103057048113
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
        'Chemical Dosing': 2,
        'Stripper': 1,
        'RO_HP': 1,
        'CF': 1
      },
      'pump': {
        'HP Pump (Wired)': 1
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
          'Ca++': 63.63,
          'Mg++': 6.63,
          'Na+': 24.12,
          'K+': 0.53,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.01,
          'Fe++': 0.05,
          'Mn++': 0,
          'SO4--': 26.51,
          'Cl-': 128.7,
          'F-': 0.01,
          'NO3-': 0.05,
          'Br-': 0,
          'PO4---': 0.27,
          'B-': 0.06,
          'SiO2': 2.65,
          'H2S': 25,
          'HCO3-': 17.23,
          'CO2': 4.01,
          'CO3--': 0.01,
          'tds': 295.46
        },
        'Stream Property': {
          'Flow': 50.00000003999996,
          'Pressure': 1,
          'Temperature': 25,
          'pH': 6.8,
          'Alkalinity': 30,
          'Conductivity at 25°C': '579',
          'Hardness': 186.33023142000002,
          'Density': 997.2,
          'Ionic Strength': 0.00694576623072805,
          'Osm.Pressure': 0.19
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '1.14',
          'Mg(OH)2': '0.00',
          'SiO2': '2.02',
          'SrSO4': '0.01',
          'Struvite': '0.000',
          'LSI': '-1.47',
          'S&DI': '-1.94'
        }
      },
      'Product_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 0.7205313089598084,
          'Mg++': 0.05283383571868044,
          'Na+': 0.3725429901967954,
          'K+': 0.4764610012185869,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.0001227183499372354,
          'Fe++': 0.0006220219702181449,
          'Mn++': 0,
          'SO4--': 0.431460024336707,
          'Cl-': 1.6636334864775697,
          'F-': 0.00015105310071785455,
          'NO3-': 0.0035525762608312693,
          'Br-': 0,
          'PO4---': 0.002567406337301418,
          'B-': 0.033624487838617725,
          'SiO2': 0.038734447528675886,
          'H2S': 0.5000429841416304,
          'HCO3-': 0.18340999763007718,
          'CO2': 0.01747311203756635,
          'CO3--': 0.00014671217373236109,
          'tds': 4.480437052239887
        },
        'Stream Property': {
          'Flow': 37.47990294643638,
          'Pressure': 0,
          'Temperature': 25,
          'pH': 7.225313721818235,
          'Alkalinity': 0.6365487148265562,
          'Conductivity at 25°C': '8.8',
          'Hardness': 2.0169542075222844,
          'Density': 997.003282973112,
          'Ionic Strength': 0.00009373362353661434,
          'Osm.Pressure': 0
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.00',
          'CaSO4': '0.01',
          'Mg(OH)2': '0.00',
          'SiO2': '0.03',
          'SrSO4': '0.00',
          'Struvite': '0.000',
          'LSI': '-4.91',
          'S&DI': '-5.42'
        }
      },
      'Waste_1': {
        'Information': '-',
        'Ion Concentration': {
          'Ca++': 251.95519961460803,
          'Mg++': 26.319343092049504,
          'Na+': 98.33351017357349,
          'K+': 0.6735155212286675,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.03956853848506323,
          'Fe++': 0.19781745590402589,
          'Mn++': 0,
          'SO4--': 216.94049979847497,
          'Cl-': 508.9948863914214,
          'F-': 0.03948371620329525,
          'NO3-': 0.18904461354873775,
          'Br-': 0,
          'PO4---': 1.07058371556116,
          'B-': 0.13895791114726863,
          'SiO2': 10.467060352062028,
          'H2S': 0.49987031229497136,
          'HCO3-': 7.68397571118963,
          'CO2': 0.19010726788293839,
          'CO3--': 0.030482031143679436,
          'tds': 1123.573798948896
        },
        'Stream Property': {
          'Flow': 12.520103057048113,
          'Pressure': 4.8647368351605085,
          'Temperature': 25,
          'pH': 7.730723431071589,
          'Alkalinity': 7.584937189475402,
          'Conductivity at 25°C': '2087',
          'Hardness': 737.5910267640726,
          'Density': 997.7990971009446,
          'Ionic Strength': 0.028778839011250407,
          'Osm.Pressure': 0.63
        },
        'Saturation Data': {
          'BaSO4': '0.00',
          'CaF2': '0.04',
          'CaSO4': '12.37',
          'Mg(OH)2': '0.00',
          'SiO2': '8.31',
          'SrSO4': '0.12',
          'Struvite': '0.000',
          'LSI': '-0.56',
          'S&DI': '-0.80'
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
    'cf_summary': {
      'units': {
        'Upstream unit': '-',
        'Downstream unit': '-',
        'Feed Temperature': '°C',
        'Flow Capacity': 'm3/hr',
        'Filter Type': '-',
        'Number of Filters': 'No.',
        'Design Flow Per TIE': 'gpm',
        'Actual Flow per TIE': 'gpm',
        'Inlet Pressure': 'atm',
        'Outlet Pressure': 'atm',
        'Pressure Drop': 'atm'
      },
      'CF_1': {
        'Upstream unit': 'Chem_Dose_2',
        'Downstream unit': 'HP_Pump_1, ',
        'Feed Temperature': 25,
        'Flow Capacity': 50.00000003999996,
        'Filter Type': 'RO.Zs 05-20',
        'Number of Filters': 23,
        'Design Flow Per TIE': 1.135619999999997,
        'Actual Flow per TIE': 1.0869565226086928,
        'Inlet Pressure': 0,
        'Outlet Pressure': 0,
        'Pressure Drop': 0.07740848415059345
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
        'Flow Rate': 'm3/hr',
        'Inlet Pressure': 'atm',
        'Discharge Pressure': 'atm',
        'Power Consumption': 'kW',
        'Pump Efficiency': '%',
        'Motor Efficiency': '%',
        'VFD Efficiency': '%'
      },
      'Total Pump Consumption (kW)': 10.625315316269436,
      'HP_Pump_1': {
        'RO Unit Attached': 'RO-HP_1, ',
        'Upstream unit': 'CF_1',
        'Downstream unit': 'RO-HP_1, ',
        'Feed Temperature': 25,
        'Flow Rate': 50.00000003999996,
        'Inlet Pressure': 0.9225915158494066,
        'Discharge Pressure': 5.800864714735962,
        'Power Consumption': 10.625315316269436,
        'Combined Efficiency': 64.61128937507031,
        'Pump Efficiency': 69.38497570346898,
        'Motor Efficiency': 96,
        'VFD Efficiency': 97
      },
      'Pump Unit ID': [
        'HP_Pump_1'
      ],
      'pump_nos': 1
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
          'Tot.Cons Mass Flow Rate': 35.90538796596985,
          'Tot.Cons As Supplied': 0.0008150682821658454,
          'Tot.Cons As Supplied with SF': 0.0008965751103824301
        },
        'Caustic Soda - 48%': {
          'Chemical Dosing Unit ID': '-Chem_Dose_2, ',
          'Chemical': 'Caustic Soda',
          'Supplied Form': 'Caustic Soda - 48%',
          'Concentration as Supplied': 48,
          'Specific Gravity as Supplied': 1.5,
          'Tot.Cons Mass Flow Rate': 3.4016234364939133,
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
      ],
      'stripper_nos': 1
    },
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
          'Downstream unit': 'Product_1, Waste_1, ',
          'Feed Flow': 50.00000003999996,
          'Product Flow': 37.47990294643638,
          'Concentrate Flow': 12.520103057048113,
          'RO Unit Recovery': 75,
          'Average Flux': 11.007535892424416,
          'Breakdown by Stage': '11.502845592095138, 9.999218943135741, ',
          'Interstage Pressure': '5.800864714735962, 5.326647621706454, ',
          'Total Membrane Area': 2006.6400000000015,
          'Feed Temperature': 25,
          'Feed Pressure': 5.800864714735962,
          'Product Pressure *': 0,
          'Feed TDS': 284.6624691254095,
          'Feed pH': 7.5,
          'Permeate TDS': 4.480437052239887,
          'Permeate pH': 7.225313721818235,
          'Concentrate TDS': 1123.573798948896,
          'Concentrate pH': 7.730723431071589
        },
        'ro_nos': 1,
        'RO Unit ID': [
          'RO-HP_1'
        ]
      },
      'ro_stage_dict': {
        'RO-HP_1': {
          'Stage': {
            '1': {
              'Housing': 6,
              'Elements': 6,
              'Element Type': '-',
              'Flow': 50.00000003999996,
              'Perm.': 26.12493321328586,
              'Conc.': 23.875069017303097,
              '% Recovery': 52.24986638477187,
              'Flux': 11.502845592095138,
              'Feed Pressure': 5.800864714735962,
              'Pressure dp': 0.474217093029508,
              'Feed TDS mg/L': 284.6623159361792,
              'Perm TDS mg/L': 3.450358450197103,
              'Last Elem Beta': 1.121929521927297
            },
            '2': {
              'Housing': 3,
              'Elements': 6,
              'Element Type': '-',
              'Flow': 23.875069017303097,
              'Perm.': 11.354969732618294,
              'Conc.': 12.520103057048113,
              '% Recovery': 47.5599451645101,
              'Flux': 9.999218943135741,
              'Feed Pressure': 5.326647621706454,
              'Pressure dp': 0.4619107865459453,
              'Feed TDS mg/L': 592.4233733830026,
              'Perm TDS mg/L': 6.849980740621928,
              'Last Elem Beta': 1.1018274165601827
            }
          }
        }
      }
    },
    'mixer_summary': {},
    'ro_elem_summary': {
      'units': {
        'Flow': {
          'Feed': 'm3/hr',
          'Permeate': 'm3/hr'
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
                'Feed': 8.333333339999994,
                'Permeate': 0.7622644564502196
              },
              'Pressure': {
                'Feed': 0.7622644564502196,
                'Net Driving': 5.5551996841546805,
                'Delta Pressure': 0.1136632646740436,
                'Feed Osm. Pressure': 0.1670521199680734
              },
              'Other': {
                'Recovery': 9.147173470084903,
                'Beta (Conc. Pol.)': 1.0938962278568773,
                'Flux': 12.123990081571517,
                'A-Value': 10.129791030352822
              },
              'Stream Property': {
                'pH': 7.240456142431906,
                'Alkalinity': 0.000012041301154089981,
                'Conductivity at 25°C': 4.828266125625259,
                'Hardness': 0.9089792140883897,
                'Density': 997.0019994047469,
                'Ionic Strength': 0.000049985125797058544
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.32057423560066645,
                'Mg++': 0.02632553746614951,
                'Na+': 0.1966404579648272,
                'K+': 0.4579754336996715,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.000053581450347099253,
                'Fe++': 0.0002714177554048578,
                'Mn++': 0,
                'SO4--': 0.21509475031985345,
                'Cl-': 0.7768799840533501,
                'F-': 0.00007967396113030091,
                'NO3-': 0.0016628604609397058,
                'Br-': 0,
                'PO4---': 0.0013544635490778812,
                'B-': 0.022633021992030215,
                'SiO2': 0.019442285201605944,
                'H2S': 0.500018277071959,
                'HCO3-': 0.1339873693362526,
                'CO2': 0.012365160219553865,
                'CO3--': 0.00010998900952906942,
                'TDS': 2.673103338892795
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '2.52',
                'Mg(OH)2': '0.00',
                'SiO2 ': '2.32',
                'SrSO4 ': '0.03',
                'Struvite ': '0.000',
                'LSI': '-1.75',
                'S&DI': '-2.08'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 7.571068908918158,
                'Permeate': 0.7478673866927744
              },
              'Pressure': {
                'Feed': 0.7478673866927744,
                'Net Driving': 5.429412469705602,
                'Delta Pressure': 0.09855028768321883,
                'Feed Osm. Pressure': 0.18313517261953155
              },
              'Other': {
                'Recovery': 9.87796301539195,
                'Beta (Conc. Pol.)': 1.0992600639088743,
                'Flux': 11.855737461569783,
                'A-Value': 10.135153389383563
              },
              'Stream Property': {
                'pH': 7.239195700636901,
                'Alkalinity': 0.00001217013609058193,
                'Conductivity at 25°C': 5.317247100807294,
                'Hardness': 1.0424333549592835,
                'Density': 997.0021578911942,
                'Ionic Strength': 0.00005532650145040446
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.36829288021822704,
                'Mg++': 0.029794760445118838,
                'Na+': 0.2180118519356267,
                'K+': 0.46179318080167464,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00006174304187035303,
                'Fe++': 0.00031290206009966157,
                'Mn++': 0,
                'SO4--': 0.24336424669506693,
                'Cl-': 0.8822765475146411,
                'F-': 0.00008836526487283493,
                'NO3-': 0.0018919725013756205,
                'Br-': 0,
                'PO4---': 0.0015127549330057428,
                'B-': 0.024446552697619982,
                'SiO2': 0.02193521986783364,
                'H2S': 0.5000466281723077,
                'HCO3-': 0.14215717396282168,
                'CO2': 0.013151564467191887,
                'CO3--': 0.00011650524167593867,
                'TDS': 2.896103285353838
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '2.87',
                'Mg(OH)2': '0.00',
                'SiO2 ': '2.57',
                'SrSO4 ': '0.03',
                'Struvite ': '0.000',
                'LSI': '-1.65',
                'S&DI': '-1.98'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 6.82320156438602,
                'Permeate': 0.7323142766302617
              },
              'Pressure': {
                'Feed': 0.7323142766302617,
                'Net Driving': 5.31417860379497,
                'Delta Pressure': 0.08438467794173707,
                'Feed Osm. Pressure': 0.20232571386922943
              },
              'Other': {
                'Recovery': 10.732707655195268,
                'Beta (Conc. Pol.)': 1.1031987462500654,
                'Flux': 11.609403757789707,
                'A-Value': 10.13977591680493
              },
              'Stream Property': {
                'pH': 7.237456036976335,
                'Alkalinity': 0.00001231623405759183,
                'Conductivity at 25°C': 5.930572535081464,
                'Hardness': 1.2105230081873009,
                'Density': 997.002356016258,
                'Ionic Strength': 0.00006202874840558488
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.4284926793097537,
                'Mg++': 0.0341057255294897,
                'Na+': 0.24482448019252268,
                'K+': 0.4659910978117743,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00007206808652743482,
                'Fe++': 0.00036541186675454157,
                'Mn++': 0,
                'SO4--': 0.27847900333333336,
                'Cl-': 1.0152467054300944,
                'F-': 0.0000992754350282967,
                'NO3-': 0.002179716108451672,
                'Br-': 0,
                'PO4---': 0.00171050861701923,
                'B-': 0.026551241022395772,
                'SiO2': 0.025020922925458308,
                'H2S': 0.5000474828118202,
                'HCO3-': 0.15160102462838582,
                'CO2': 0.014074317344607262,
                'CO3--': 0.00012393505929505548,
                'TDS': 3.1749112781681044
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '3.30',
                'Mg(OH)2': '0.00',
                'SiO2 ': '2.88',
                'SrSO4 ': '0.04',
                'Struvite ': '0.000',
                'LSI': '-1.54',
                'S&DI': '-1.86'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 6.090887338612939,
                'Permeate': 0.7178085458486279
              },
              'Pressure': {
                'Feed': 0.7178085458486279,
                'Net Driving': 5.207040739687732,
                'Delta Pressure': 0.07116823898442434,
                'Feed Osm. Pressure': 0.2255781906881103
              },
              'Other': {
                'Recovery': 11.784958511678733,
                'Beta (Conc. Pol.)': 1.108099955028564,
                'Flux': 11.379758969305835,
                'A-Value': 10.143706535653594
              },
              'Stream Property': {
                'pH': 7.234895100515438,
                'Alkalinity': 0.000012481858807726319,
                'Conductivity at 25°C': 6.702045543562613,
                'Hardness': 1.4230421088213268,
                'Density': 997.0026044447088,
                'Ionic Strength': 0.00007046421117940733
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.5047425386277089,
                'Mg++': 0.03947244356838985,
                'Na+': 0.2784318157669272,
                'K+': 0.47059143159150063,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00008519223200852842,
                'Fe++': 0.00043222430398719066,
                'Mn++': 0,
                'SO4--': 0.3221608999687724,
                'Cl-': 1.1834758944505712,
                'F-': 0.00011296649412165893,
                'NO3-': 0.0025422246552483886,
                'Br-': 0,
                'PO4---': 0.0019579926262377452,
                'B-': 0.029001731442323462,
                'SiO2': 0.028835649417989245,
                'H2S': 0.5000487910173707,
                'HCO3-': 0.16258718160088706,
                'CO2': 0.015174283093689712,
                'CO3--': 0.0001323708146948572,
                'TDS': 3.524611348578739
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '3.85',
                'Mg(OH)2': '0.00',
                'SiO2 ': '3.26',
                'SrSO4 ': '0.04',
                'Struvite ': '0.000',
                'LSI': '-1.42',
                'S&DI': '-1.74'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 5.373078855507598,
                'Permeate': 0.7039113662347036
              },
              'Pressure': {
                'Feed': 0.7039113662347036,
                'Net Driving': 5.104796896363477,
                'Delta Pressure': 0.05889105464495221,
                'Feed Osm. Pressure': 0.25437966847505955
              },
              'Other': {
                'Recovery': 13.100707902568177,
                'Beta (Conc. Pol.)': 1.114219950247844,
                'Flux': 11.15992403624999,
                'A-Value': 10.146992963970629
              },
              'Stream Property': {
                'pH': 7.231166537173017,
                'Alkalinity': 0.000012673221558267676,
                'Conductivity at 25°C': 7.703611024811569,
                'Hardness': 1.7002255423836643,
                'Density': 997.0029259576178,
                'Ionic Strength': 0.00008142084236646683
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.6043822351456267,
                'Mg++': 0.04635757623323288,
                'Na+': 0.32199365292301124,
                'K+': 0.47567492325269217,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00010240685576113112,
                'Fe++': 0.0005199598779246947,
                'Mn++': 0,
                'SO4--': 0.37815539257246616,
                'Cl-': 1.4032405634306373,
                'F-': 0.00013073592293661728,
                'NO3-': 0.003013275447347221,
                'Br-': 0,
                'PO4---': 0.0022776715661199307,
                'B-': 0.031922996262433834,
                'SiO2': 0.033691996448603594,
                'H2S': 0.5000509402128297,
                'HCO3-': 0.17564765632267015,
                'CO2': 0.016522365290408767,
                'CO3--': 0.00014208826058227994,
                'TDS': 3.977304070734876
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.00',
                'CaSO4': '4.58',
                'Mg(OH)2': '0.00',
                'SiO2 ': '3.75',
                'SrSO4 ': '0.05',
                'Struvite ': '0.000',
                'LSI': '-1.29',
                'S&DI': '-1.60'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 4.669167568834294,
                'Permeate': 0.6899895036801695
              },
              'Pressure': {
                'Feed': 0.6899895036801695,
                'Net Driving': 5.0028875397998736,
                'Delta Pressure': 0.04755956910113089,
                'Feed Osm. Pressure': 0.2910249034866396
              },
              'Other': {
                'Recovery': 14.777569952419434,
                'Beta (Conc. Pol.)': 1.121929521927297,
                'Flux': 10.940032779586549,
                'A-Value': 10.1496828320645
              },
              'Stream Property': {
                'pH': 7.225728412919281,
                'Alkalinity': 0.000012899937992474758,
                'Conductivity at 25°C': 9.05678788034325,
                'Hardness': 2.0762920749429568,
                'Density': 997.0033590033677,
                'Ionic Strength': 0.00009622990414020361
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.7398402751482366,
                'Mg++': 0.05553359158606402,
                'Na+': 0.38086472078907396,
                'K+': 0.481345750214264,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.0001259046202113876,
                'Fe++': 0.000639870853841002,
                'Mn++': 0,
                'SO4--': 0.4527118368110689,
                'Cl-': 1.7021475814650737,
                'F-': 0.00015478486968373894,
                'NO3-': 0.0036497100815643083,
                'Br-': 0,
                'PO4---': 0.0027072467221665,
                'B-': 0.03550867163693115,
                'SiO2': 0.040108773114391844,
                'H2S': 0.5000547160003757,
                'HCO3-': 0.19161011233133823,
                'CO2': 0.018234159219573276,
                'CO3--': 0.00015348527371745704,
                'TDS': 4.587157031518002
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.01',
                'CaSO4': '5.58',
                'Mg(OH)2': '0.00',
                'SiO2 ': '4.39',
                'SrSO4 ': '0.06',
                'Struvite ': '0.000',
                'LSI': '-1.14',
                'S&DI': '-1.44'
              }
            }
          }
        },
        'Stage 2': {
          '0': {
            'Category': {
              'Flow': {
                'Feed': 7.958356339101034,
                'Permeate': 0.6752805371504205
              },
              'Pressure': {
                'Feed': 0.6752805371504205,
                'Net Driving': 4.8939942489703965,
                'Delta Pressure': 0.10693870848628272,
                'Feed Osm. Pressure': 0.33923346586285485
              },
              'Other': {
                'Recovery': 8.485175938059331,
                'Beta (Conc. Pol.)': 1.0864767106986823,
                'Flux': 10.706037945490404,
                'A-Value': 10.153586801555853
              },
              'Stream Property': {
                'pH': 7.2199072954479835,
                'Alkalinity': 0.000013073772031684042,
                'Conductivity at 25°C': 10.086827521206537,
                'Hardness': 2.3607331924386905,
                'Density': 997.0036878489339,
                'Ionic Strength': 0.0001073747187027645
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.8447511798648308,
                'Mg++': 0.06098448665500161,
                'Na+': 0.4265317753997458,
                'K+': 0.4857743881694229,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00014392227746063479,
                'Fe++': 0.0007280969851001787,
                'Mn++': 0,
                'SO4--': 0.49867675513202114,
                'Cl-': 1.9377515386886224,
                'F-': 0.0001726101289809703,
                'NO3-': 0.004157002611959286,
                'Br-': 0,
                'PO4---': 0.00291446399459268,
                'B-': 0.037921103517209696,
                'SiO2': 0.04521361164105883,
                'H2S': 0.5000389167603686,
                'HCO3-': 0.20479075991793744,
                'CO2': 0.01973864435184089,
                'CO3--': 0.00016216544420630857,
                'TDS': 5.0507127771885205
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.01',
                'CaSO4': '6.23',
                'Mg(OH)2': '0.00',
                'SiO2 ': '4.79',
                'SrSO4 ': '0.07',
                'Struvite ': '0.000',
                'LSI': '-1.06',
                'S&DI': '-1.35'
              }
            }
          },
          '1': {
            'Category': {
              'Flow': {
                'Feed': 7.283075932190971,
                'Permeate': 0.6567881136147693
              },
              'Pressure': {
                'Feed': 0.6567881136147693,
                'Net Driving': 4.758122687340372,
                'Delta Pressure': 0.09382756803300522,
                'Feed Osm. Pressure': 0.3693376940944329
              },
              'Other': {
                'Recovery': 9.018004476814339,
                'Beta (Conc. Pol.)': 1.0889098490012405,
                'Flux': 10.41400770926168,
                'A-Value': 10.158659902891763
              },
              'Stream Property': {
                'pH': 7.215250875555116,
                'Alkalinity': 0.00001323371734545386,
                'Conductivity at 25°C': 11.312315312729941,
                'Hardness': 2.70129755346506,
                'Density': 997.0040782749306,
                'Ionic Strength': 0.00012076158523542725
              },
              'Permeate Ion Concentration': {
                'Ca++': 0.9680987734717587,
                'Mg++': 0.06888348837807141,
                'Na+': 0.48106544488808783,
                'K+': 0.4891330864460081,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00016533010581743892,
                'Fe++': 0.0008366052466656906,
                'Mn++': 0,
                'SO4--': 0.5631689251332143,
                'Cl-': 2.2125549454004876,
                'F-': 0.0001947358008715113,
                'NO3-': 0.004736205208072778,
                'Br-': 0,
                'PO4---': 0.003279368053482081,
                'B-': 0.04076923871764334,
                'SiO2': 0.050970765728384534,
                'H2S': 0.5000393851018341,
                'HCO3-': 0.21643305628466453,
                'CO2': 0.0210701488880506,
                'CO3--': 0.00016992015862616282,
                'TDS': 5.600499274123689
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.01',
                'CaSO4': '7.00',
                'Mg(OH)2': '0.00',
                'SiO2 ': '5.26',
                'SrSO4 ': '0.07',
                'Struvite ': '0.000',
                'LSI': '-0.97',
                'S&DI': '-1.26'
              }
            }
          },
          '2': {
            'Category': {
              'Flow': {
                'Feed': 6.626287970057274,
                'Permeate': 0.6391604147349861
              },
              'Pressure': {
                'Feed': 0.6391604147349861,
                'Net Driving': 4.628663778617938,
                'Delta Pressure': 0.08158001525927427,
                'Feed Osm. Pressure': 0.40436906923465554
              },
              'Other': {
                'Recovery': 9.645829122175344,
                'Beta (Conc. Pol.)': 1.0913049005634827,
                'Flux': 10.135083697084617,
                'A-Value': 10.163092223202506
              },
              'Stream Property': {
                'pH': 7.209615679223284,
                'Alkalinity': 0.00001341229434002051,
                'Conductivity at 25°C': 12.791416343028294,
                'Hardness': 3.1133669362646317,
                'Density': 997.0045488769227,
                'Ionic Strength': 0.0001369241622821074
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.1175672505188063,
                'Mg++': 0.07830586658247009,
                'Na+': 0.5468341006809823,
                'K+': 0.49266058383029443,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00019133798899566477,
                'Fe++': 0.0009685014710617631,
                'Mn++': 0,
                'SO4--': 0.6400672768709113,
                'Cl-': 2.5456088105461605,
                'F-': 0.00022143989208292463,
                'NO3-': 0.005434134034595416,
                'Br-': 0,
                'PO4---': 0.003715799915007164,
                'B-': 0.0439465411959244,
                'SiO2': 0.05781056657041373,
                'H2S': 0.5000397803231525,
                'HCO3-': 0.22965364632529736,
                'CO2': 0.022630272291683656,
                'CO3--': 0.00017840770609797677,
                'TDS': 6.263204044452253
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.01',
                'CaSO4': '7.93',
                'Mg(OH)2': '0.00',
                'SiO2 ': '5.82',
                'SrSO4 ': '0.08',
                'Struvite ': '0.000',
                'LSI': '-0.88',
                'S&DI': '-1.16'
              }
            }
          },
          '3': {
            'Category': {
              'Flow': {
                'Feed': 5.987127733880692,
                'Permeate': 0.6219862598184144
              },
              'Pressure': {
                'Feed': 0.6219862598184144,
                'Net Driving': 4.502963457212186,
                'Delta Pressure': 0.07017006700538013,
                'Feed Osm. Pressure': 0.4456681982135877
              },
              'Other': {
                'Recovery': 10.388725403312215,
                'Beta (Conc. Pol.)': 1.094207733570382,
                'Flux': 9.863565999431046,
                'A-Value': 10.166926749390907
              },
              'Stream Property': {
                'pH': 7.202760822587329,
                'Alkalinity': 0.000013614955114695123,
                'Conductivity at 25°C': 14.611525750009331,
                'Hardness': 3.621612945179763,
                'Density': 997.0051273048653,
                'Ionic Strength': 0.00015682014240194463
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.3022041195952765,
                'Mg++': 0.0897560491813613,
                'Na+': 0.6277772838636161,
                'K+': 0.4963797345128427,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00022355003138678904,
                'Fe++': 0.0011319552704369387,
                'Mn++': 0,
                'SO4--': 0.7334750965160012,
                'Cl-': 2.957242677777826,
                'F-': 0.00025433128344559827,
                'NO3-': 0.006291217426555352,
                'Br-': 0,
                'PO4---': 0.004247787669771383,
                'B-': 0.04755177633941217,
                'SiO2': 0.06608773118897023,
                'H2S': 0.5000403608013577,
                'HCO3-': 0.24489447671245204,
                'CO2': 0.024492440368592296,
                'CO3--': 0.00018779198580335467,
                'TDS': 7.0777459401565155
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.02',
                'CaSO4': '9.08',
                'Mg(OH)2': '0.00',
                'SiO2 ': '6.48',
                'SrSO4 ': '0.09',
                'Struvite ': '0.000',
                'LSI': '-0.78',
                'S&DI': '-1.05'
              }
            }
          },
          '4': {
            'Category': {
              'Flow': {
                'Feed': 5.365141687754227,
                'Permeate': 0.604799244640076
              },
              'Pressure': {
                'Feed': 0.604799244640076,
                'Net Driving': 4.377672293527465,
                'Delta Pressure': 0.05958229748422014,
                'Feed Osm. Pressure': 0.49508113030946893
              },
              'Other': {
                'Recovery': 11.272754380755906,
                'Beta (Conc. Pol.)': 1.0976886549621883,
                'Flux': 9.592212926524248,
                'A-Value': 10.170205422009843
              },
              'Stream Property': {
                'pH': 7.194370159056779,
                'Alkalinity': 0.00001384958388463525,
                'Conductivity at 25°C': 16.90230749258166,
                'Hardness': 4.262693740927436,
                'Density': 997.0058546054695,
                'Ionic Strength': 0.00018187186990503468
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.5354671885007463,
                'Mg++': 0.10397467161657736,
                'Na+': 0.7297553387261472,
                'K+': 0.5003180983356097,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.0002643562716187927,
                'Fe++': 0.0013391422889003773,
                'Mn++': 0,
                'SO4--': 0.8494160842475568,
                'Cl-': 3.477729897765559,
                'F-': 0.00029580431433898127,
                'NO3-': 0.007367007174660044,
                'Br-': 0,
                'PO4---': 0.004910657034459309,
                'B-': 0.05170960057006927,
                'SiO2': 0.07632199759196578,
                'H2S': 0.5000412297256298,
                'HCO3-': 0.26278087357322877,
                'CO2': 0.026763759851681355,
                'CO3--': 0.00019829850006905714,
                'TDS': 8.101890246237136
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.03',
                'CaSO4': '10.52',
                'Mg(OH)2': '0.00',
                'SiO2 ': '7.30',
                'SrSO4 ': '0.10',
                'Struvite ': '0.000',
                'LSI': '-0.68',
                'S&DI': '-0.93'
              }
            }
          },
          '5': {
            'Category': {
              'Flow': {
                'Feed': 4.760342703328426,
                'Permeate': 0.586975340879677
              },
              'Pressure': {
                'Feed': 0.586975340879677,
                'Net Driving': 4.248370393961834,
                'Delta Pressure': 0.0498121302777828,
                'Feed Osm. Pressure': 0.5552109037490823
              },
              'Other': {
                'Recovery': 12.330526969607973,
                'Beta (Conc. Pol.)': 1.1018274165601827,
                'Flux': 9.311420965728308,
                'A-Value': 10.172969676182614
              },
              'Stream Property': {
                'pH': 7.184030833450273,
                'Alkalinity': 0.000014128107885056619,
                'Conductivity at 25°C': 19.864533593516075,
                'Hardness': 5.093460374573813,
                'Density': 997.0067944074608,
                'Ionic Strength': 0.00021428461648418997
              },
              'Permeate Ion Concentration': {
                'Ca++': 1.8382503298344348,
                'Mg++': 0.12209643992290321,
                'Na+': 0.8618766268263017,
                'K+': 0.5045092732828806,
                'NH4+': 0,
                'Ba++': 0,
                'Sr++': 0.00031747298225006857,
                'Fe++': 0.001608996507423391,
                'Mn++': 0,
                'SO4--': 0.9971188263063332,
                'Cl-': 4.154136915908975,
                'F-': 0.0003495813470681011,
                'NO3-': 0.008753177276383682,
                'Br-': 0,
                'PO4---': 0.00575857582679263,
                'B-': 0.05659668813187649,
                'SiO2': 0.08930927754759414,
                'H2S': 0.5000425606194285,
                'HCO3-': 0.2842276294448837,
                'CO2': 0.029605501557013428,
                'CO3--': 0.0002102539508863303,
                'TDS': 9.425162625716416
              },
              'Saturation Data': {
                'BaSO4': '0.00',
                'CaF2 ': '0.04',
                'CaSO4': '12.37',
                'Mg(OH)2': '0.00',
                'SiO2 ': '8.31',
                'SrSO4 ': '0.12',
                'Struvite ': '0.000',
                'LSI': '-0.56',
                'S&DI': '-0.80'
              }
            }
          }
        }
      },
      'ro_nos': 1,
      'RO Unit ID': [
        'RO-HP_1'
      ]
    },
    'clro_elem_summary': {},
    'system_units': {
      'Volume Flow': 'm3/hr',
      'Pressure': 'atm',
      'Temperature': '°C',
      'Liquid Volume': 'gal',
      'Flux': 'gfd',
      'Power': 'kW'
    },
    'stream_output': {
      '1': {
        'flow': 50.00000003999996,
        'temp': 25,
        'press': 1,
        'prop_dict': {
          'malk': 30,
          'ph': 6.8,
          'toc': 0,
          'temp': 25,
          'tds': 295.46,
          'flow': 50.00000003999996,
          'press': 1,
          'hardness': 186.33023142000002,
          'density': 997.2,
          'ionic_str': 0.00694576623072805
        },
        'ppm_dict': {
          'Ca++': 63.63,
          'Mg++': 6.63,
          'Na+': 24.12,
          'K+': 0.53,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.01,
          'Fe++': 0.05,
          'Mn++': 0,
          'SO4--': 26.51,
          'Cl-': 128.7,
          'F-': 0.01,
          'NO3-': 0.05,
          'Br-': 0,
          'PO4---': 0.27,
          'B-': 0.06,
          'SiO2': 2.65,
          'H2S': 25,
          'HCO3-': 17.23,
          'CO2': 4.01,
          'CO3--': 0.01
        },
        'sat_indices': {
          'density': '997.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.01%',
          'lsi': '-1.47',
          'sdi': '-1.94',
          'caso4': '1.14%',
          'struvite': '0.000%',
          'sio2': '2.02%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.19,
          'conductivity': '579'
        },
        'molal_dict': {
          'H+': 1.722320328941203e-7,
          'Ca++': 0.0015925592416102005,
          'Mg++': 0.00027362616101581625,
          'Na+': 0.0010525251225259064,
          'K+': 0.000013597561810105162,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1448180428598012e-7,
          'Fe++': 8.981015034056387e-7,
          'Mn++': 0,
          'OH-': 6.932948612447996e-8,
          'SO4--': 0.00027681121638594374,
          'HSO4-': 3.245621323538983e-9,
          'Cl-': 0.003641373862581486,
          'F-': 5.278836501396294e-7,
          'HF': 1.1380704205168041e-10,
          'NO3-': 8.08891014413391e-7,
          'Br-': 0,
          'PO4---': 4.092147966110826e-12,
          'HPO4--': 9.57630856809029e-7,
          'H2PO4-': 0.000001894083579446411,
          'H3PO4': 3.8151757007753027e-11,
          'B(OH)4-': 2.236369245073418e-8,
          'B(OH)3': 0.000005544685992983125,
          'H2SiO4--': 5.977700108513034e-13,
          'H3SiO4-': 3.6048632832138034e-8,
          'H4SiO4': 0.000044205135748052035,
          'S--': 0,
          'HS-': 0.0003169764667821579,
          'H2S': 0.0004188148373914218,
          'HCO3-': 0.000283224012356866,
          'CO2': 0.00009142707240611359,
          'CO3--': 1.0849644092511868e-7,
          'Total': 0
        },
        'ionic_strength': 0.00694576623072805,
        'hardness': 186.33023142000002,
        'label': '[ Feed_1 ] Raw Feed'
      },
      '2': {
        'flow': 50.00000003999996,
        'temp': 25,
        'press': 1,
        'prop_dict': {
          'malk': 0.7683032556865649,
          'ph': 5,
          'toc': 0,
          'temp': 25,
          'tds': 307.4215541835077,
          'flow': 50.00000003999996,
          'press': 1,
          'hardness': 186.20890345779574,
          'density': 997.2188481311227,
          'ionic_str': 0.007249358931221234
        },
        'ppm_dict': {
          'Ca++': 63.63,
          'Mg++': 6.63,
          'Na+': 24.12,
          'K+': 0.53,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.01,
          'Fe++': 0.05,
          'Mn++': 0,
          'SO4--': 54.64558939738396,
          'Cl-': 128.7,
          'F-': 0.01,
          'NO3-': 0.05,
          'Br-': 0,
          'PO4---': 0.27,
          'B-': 0.06,
          'SiO2': 2.65,
          'H2S': 25,
          'HCO3-': 1.0659584369326651,
          'CO2': 15.675981645123702,
          'CO3--': 0.000006349191078702635
        },
        'sat_indices': {
          'density': '997.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.03%',
          'lsi': '-3.27',
          'sdi': '-4.95',
          'caso4': '2.25%',
          'struvite': '0.000%',
          'sio2': '1.41%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.19,
          'conductivity': '581'
        },
        'molal_dict': {
          'H+': 0.00001085898626908644,
          'Ca++': 0.0015925671902817394,
          'Mg++': 0.00027362752671978603,
          'Na+': 0.0010523984848197264,
          'K+': 0.00001359762967731521,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1448237567964366e-7,
          'Fe++': 8.981059859477463e-7,
          'Mn++': 0,
          'OH-': 1.0978978567135135e-9,
          'SO4--': 0.0005701831094037138,
          'HSO4-': 4.2288566957667296e-7,
          'Cl-': 0.003641392037154496,
          'F-': 5.209076301973901e-7,
          'HF': 7.09246228868085e-9,
          'NO3-': 8.08895051694276e-7,
          'Br-': 0,
          'PO4---': 1.5243684506121462e-15,
          'HPO4--': 2.259463583294984e-8,
          'H2PO4-': 0.0000028255811570725465,
          'H3PO4': 3.5951192212522403e-9,
          'B(OH)4-': 3.5551155863866964e-10,
          'B(OH)3': 0.000005566721959748572,
          'H2SiO4--': 1.4979356831325827e-16,
          'H3SiO4-': 5.71251062508701e-10,
          'H4SiO4': 0.00004424083454098446,
          'S--': 0,
          'HS-': 0.000008713985873131974,
          'H2S': 0.0007270809907311149,
          'HCO3-': 0.000017523982327510637,
          'CO2': 0.0003572948562404105,
          'CO3--': 1.0613176675785186e-10,
          'Total': 0
        },
        'ionic_strength': 0.007249358931221234,
        'hardness': 186.20890345779574,
        'label': '[ Chem_Dose_1 ] Dosed Stream'
      },
      '3': {
        'flow': 50.00000003999996,
        'temp': 25,
        'press': 1,
        'prop_dict': {
          'malk': 0.6794259246415656,
          'ph': 6.051029912360281,
          'toc': 0,
          'temp': 25,
          'tds': 282.62383430306386,
          'flow': 50.00000003999996,
          'press': 1,
          'hardness': 186.20890345779574,
          'density': 997.2188481311227,
          'ionic_str': 0.007249358931221234
        },
        'ppm_dict': {
          'Ca++': 63.63024461950509,
          'Mg++': 6.630025488406705,
          'Na+': 24.12009272705426,
          'K+': 0.5300020375347745,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.010000038444052348,
          'Fe++': 0.05000019222026174,
          'Mn++': 0,
          'SO4--': 54.6457994771739,
          'Cl-': 128.7004947749537,
          'F-': 0.010000038444052348,
          'NO3-': 0.050000192220261745,
          'Br-': 0,
          'PO4---': 0.27000103798941344,
          'B-': 0.06000023066431407,
          'SiO2': 2.6500101876738724,
          'H2S': 0.5000000775017903,
          'HCO3-': 0.7671114203708723,
          'CO2': 1.0000001550035804,
          'CO3--': 0.00005176290652300903
        },
        'sat_indices': {
          'density': '997.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.03%',
          'lsi': '-3.30',
          'sdi': '-4.04',
          'caso4': '2.25%',
          'struvite': '0.000%',
          'sio2': '1.71%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.17,
          'conductivity': '577'
        },
        'molal_dict': {
          'H+': 9.676358445924801e-7,
          'Ca++': 0.0015925671902817394,
          'Mg++': 0.00027362752671978603,
          'Na+': 0.0010523984848197264,
          'K+': 0.00001359762967731521,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 1.1448237567964366e-7,
          'Fe++': 8.981059859477463e-7,
          'Mn++': 0,
          'OH-': 1.2377641054016212e-8,
          'SO4--': 0.0005705686468458046,
          'HSO4-': 3.7348227485796173e-8,
          'Cl-': 0.003641392037154496,
          'F-': 5.273634089863036e-7,
          'HF': 6.366834997673918e-10,
          'NO3-': 8.08895051694276e-7,
          'Br-': 0,
          'PO4---': 1.8156601247952796e-13,
          'HPO4--': 2.3660353286029546e-7,
          'H2PO4-': 0.0000026148723625070933,
          'H3PO4': 2.948367177157168e-10,
          'B(OH)3': 0.0000055630705396208134,
          'B(OH)4-': 4.0069316863975215e-9,
          'H2SiO4--': 1.9124194022782616e-14,
          'H3SiO4-': 6.441879006893983e-9,
          'H4SiO4': 0.00004423496389406567,
          'S--': 0,
          'HS-': 0.0000017518363983311645,
          'H2S': 0.00001296400884109842,
          'HCO3-': 0.000012610950170173032,
          'CO2': 0.000022792339806872942,
          'CO3--': 8.65251731295685e-10
        },
        'ionic_strength': 0.007249358931221234,
        'hardness': 186.20890345779574,
        'label': '[ Stripper_1 ] Stripped Stream'
      },
      '4': {
        'flow': 50.00000003999996,
        'temp': 25,
        'press': 1,
        'prop_dict': {
          'malk': 2.3765076361987885,
          'ph': 7.5,
          'toc': 0,
          'temp': 25,
          'tds': 284.6624691254095,
          'flow': 50.00000003999996,
          'press': 1,
          'hardness': 186.20676475569473,
          'density': 997.2033734060707,
          'ionic_str': 0.007274439635011672
        },
        'ppm_dict': {
          'Ca++': 63.63024461950509,
          'Mg++': 6.630025488406705,
          'Na+': 24.902184611369908,
          'K+': 0.5300020375347745,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.010000038444052348,
          'Fe++': 0.05000019222026174,
          'Mn++': 0,
          'SO4--': 54.6457994771739,
          'Cl-': 128.7004947749537,
          'F-': 0.010000038444052348,
          'NO3-': 0.050000192220261745,
          'Br-': 0,
          'PO4---': 0.27000103798941344,
          'B-': 0.06000023066431407,
          'SiO2': 2.6500101876738724,
          'H2S': 0.5000000775017903,
          'HCO3-': 2.019873265575913,
          'CO2': 0.09364120329311011,
          'CO3--': 0.0038328557314179393
        },
        'sat_indices': {
          'density': '997.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.03%',
          'lsi': '-1.85',
          'sdi': '-2.17',
          'caso4': '2.24%',
          'struvite': '0.000%',
          'sio2': '2.11%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.17,
          'conductivity': '579'
        },
        'molal_dict': {
          'H+': 3.4416157775920285e-8,
          'Ca++': 0.0015925674218699411,
          'Mg++': 0.00027362756651019935,
          'Na+': 0.001086522571088159,
          'K+': 0.000013597631654657592,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1448239232746087e-7,
          'Fe++': 8.981061165486725e-7,
          'Mn++': 0,
          'OH-': 3.4804111704306883e-7,
          'SO4--': 0.0005706047498668008,
          'HSO4-': 1.3281829675869843e-9,
          'Cl-': 0.0036413925666790516,
          'F-': 5.279775002273797e-7,
          'HF': 2.2669039496994548e-11,
          'NO3-': 8.088951693223118e-7,
          'Br-': 0,
          'PO4---': 4.418172574651908e-11,
          'HPO4--': 0.000002047168613313681,
          'H2PO4-': 8.045553071536097e-7,
          'H3PO4': 3.2261573787771916e-12,
          'B(OH)4-': 1.1051292460070467e-7,
          'B(OH)3': 0.000005456565356260706,
          'H2SiO4--': 1.5062600049804163e-11,
          'H3SiO4-': 1.8042524287946712e-7,
          'H4SiO4': 0.000044060971920221376,
          'S--': 0,
          'HS-': 0.000011649846178824382,
          'H2S': 0.0000030660012005564427,
          'HCO3-': 0.0000332057882479786,
          'CO2': 0.000002134303326644169,
          'CO3--': 6.40688025618538e-8,
          'Total': 0
        },
        'ionic_strength': 0.007274439635011672,
        'hardness': 186.20676475569473,
        'label': '[ Chem_Dose_2 ] Dosed Stream'
      },
      '5': {
        'flow': 50.00000003999996,
        'temp': 25,
        'press': 0.9225915158494066,
        'prop_dict': {
          'malk': 2.3765076361987885,
          'ph': 7.5,
          'toc': 0,
          'temp': 25,
          'tds': 284.6624691254095,
          'flow': 50.00000003999996,
          'press': 0.9225915158494066,
          'hardness': 186.20676475569473,
          'density': 997.2033734060707,
          'ionic_str': 0.007274439635011672
        },
        'ppm_dict': {
          'Ca++': 63.63024461950509,
          'Mg++': 6.630025488406705,
          'Na+': 24.902184611369908,
          'K+': 0.5300020375347745,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.010000038444052348,
          'Fe++': 0.05000019222026174,
          'Mn++': 0,
          'SO4--': 54.6457994771739,
          'Cl-': 128.7004947749537,
          'F-': 0.010000038444052348,
          'NO3-': 0.050000192220261745,
          'Br-': 0,
          'PO4---': 0.27000103798941344,
          'B-': 0.06000023066431407,
          'SiO2': 2.6500101876738724,
          'H2S': 0.5000000775017903,
          'HCO3-': 2.019873265575913,
          'CO2': 0.09364120329311011,
          'CO3--': 0.0038328557314179393
        },
        'sat_indices': {
          'density': '997.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.03%',
          'lsi': '-1.85',
          'sdi': '-2.17',
          'caso4': '2.24%',
          'struvite': '0.000%',
          'sio2': '2.11%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.17,
          'conductivity': '579'
        },
        'molal_dict': {
          'H+': 3.4416157775920285e-8,
          'Ca++': 0.0015925674218699411,
          'Mg++': 0.00027362756651019935,
          'Na+': 0.001086522571088159,
          'K+': 0.000013597631654657592,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1448239232746087e-7,
          'Fe++': 8.981061165486725e-7,
          'Mn++': 0,
          'OH-': 3.4804111704306883e-7,
          'SO4--': 0.0005706047498668008,
          'HSO4-': 1.3281829675869843e-9,
          'Cl-': 0.0036413925666790516,
          'F-': 5.279775002273797e-7,
          'HF': 2.2669039496994548e-11,
          'NO3-': 8.088951693223118e-7,
          'Br-': 0,
          'PO4---': 4.418172574651908e-11,
          'HPO4--': 0.000002047168613313681,
          'H2PO4-': 8.045553071536097e-7,
          'H3PO4': 3.2261573787771916e-12,
          'B(OH)4-': 1.1051292460070467e-7,
          'B(OH)3': 0.000005456565356260706,
          'H2SiO4--': 1.5062600049804163e-11,
          'H3SiO4-': 1.8042524287946712e-7,
          'H4SiO4': 0.000044060971920221376,
          'S--': 0,
          'HS-': 0.000011649846178824382,
          'H2S': 0.0000030660012005564427,
          'HCO3-': 0.0000332057882479786,
          'CO2': 0.000002134303326644169,
          'CO3--': 6.40688025618538e-8,
          'Total': 0
        },
        'ionic_strength': 0.007274439635011672,
        'hardness': 186.20676475569473,
        'label': '[ HP_Pump_1 ] Feed'
      },
      '6': {
        'flow': 50.00000003999996,
        'temp': 25,
        'press': 5.800864714735962,
        'prop_dict': {
          'malk': 2.3765076361987885,
          'ph': 7.5,
          'toc': 0,
          'temp': 25,
          'tds': 284.6624691254095,
          'flow': 50.00000003999996,
          'press': 5.800864714735962,
          'hardness': 186.20676475569473,
          'density': 997.2033734060707,
          'ionic_str': 0.007274439635011672
        },
        'ppm_dict': {
          'Ca++': 63.63024461950509,
          'Mg++': 6.630025488406705,
          'Na+': 24.902184611369908,
          'K+': 0.5300020375347745,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.010000038444052348,
          'Fe++': 0.05000019222026174,
          'Mn++': 0,
          'SO4--': 54.6457994771739,
          'Cl-': 128.7004947749537,
          'F-': 0.010000038444052348,
          'NO3-': 0.050000192220261745,
          'Br-': 0,
          'PO4---': 0.27000103798941344,
          'B-': 0.06000023066431407,
          'SiO2': 2.6500101876738724,
          'H2S': 0.5000000775017903,
          'HCO3-': 2.019873265575913,
          'CO2': 0.09364120329311011,
          'CO3--': 0.0038328557314179393
        },
        'sat_indices': {
          'density': '997.2',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.03%',
          'lsi': '-1.85',
          'sdi': '-2.17',
          'caso4': '2.24%',
          'struvite': '0.000%',
          'sio2': '2.11%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.17,
          'conductivity': '579'
        },
        'molal_dict': {
          'H+': 3.4416157775920285e-8,
          'Ca++': 0.0015925674218699411,
          'Mg++': 0.00027362756651019935,
          'Na+': 0.001086522571088159,
          'K+': 0.000013597631654657592,
          'NH3': 0,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 1.1448239232746087e-7,
          'Fe++': 8.981061165486725e-7,
          'Mn++': 0,
          'OH-': 3.4804111704306883e-7,
          'SO4--': 0.0005706047498668008,
          'HSO4-': 1.3281829675869843e-9,
          'Cl-': 0.0036413925666790516,
          'F-': 5.279775002273797e-7,
          'HF': 2.2669039496994548e-11,
          'NO3-': 8.088951693223118e-7,
          'Br-': 0,
          'PO4---': 4.418172574651908e-11,
          'HPO4--': 0.000002047168613313681,
          'H2PO4-': 8.045553071536097e-7,
          'H3PO4': 3.2261573787771916e-12,
          'B(OH)4-': 1.1051292460070467e-7,
          'B(OH)3': 0.000005456565356260706,
          'H2SiO4--': 1.5062600049804163e-11,
          'H3SiO4-': 1.8042524287946712e-7,
          'H4SiO4': 0.000044060971920221376,
          'S--': 0,
          'HS-': 0.000011649846178824382,
          'H2S': 0.0000030660012005564427,
          'HCO3-': 0.0000332057882479786,
          'CO2': 0.000002134303326644169,
          'CO3--': 6.40688025618538e-8,
          'Total': 0
        },
        'ionic_strength': 0.007274439635011672,
        'hardness': 186.20676475569473,
        'label': '[ RO-HP_1 ] Element Feed'
      },
      '7': {
        'flow': 12.520103057048113,
        'temp': 25,
        'press': 4.8647368351605085,
        'prop_dict': {
          'flow': 12.520103057048113,
          'temp': 25,
          'press': 4.8647368351605085,
          'tds': 1123.573798948896,
          'ph': 7.730723431071589,
          'toc': 0.0001311954628733026,
          'malk': 7.584937189475402,
          'hardness': 737.5910267640726,
          'density': 997.7990971009446,
          'ionic_str': 0.028778839011250407
        },
        'ppm_dict': {
          'Ca++': 251.95519961460803,
          'Mg++': 26.319343092049504,
          'Na+': 98.33351017357349,
          'K+': 0.6735155212286675,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.03956853848506323,
          'Fe++': 0.19781745590402589,
          'Mn++': 0,
          'SO4--': 216.94049979847497,
          'Cl-': 508.9948863914214,
          'F-': 0.03948371620329525,
          'NO3-': 0.18904461354873775,
          'Br-': 0,
          'PO4---': 1.07058371556116,
          'B-': 0.13895791114726863,
          'SiO2': 10.467060352062028,
          'H2S': 0.49987031229497136,
          'HCO3-': 7.68397571118963,
          'CO2': 0.19010726788293839,
          'CO3--': 0.030482031143679436
        },
        'sat_indices': {
          'density': '997.8',
          'baso4': '0.00%',
          'caf2': '0.04%',
          'srso4': '0.12%',
          'lsi': '-0.56',
          'sdi': '-0.80',
          'caso4': '12.37%',
          'struvite': '0.000%',
          'sio2': '8.31%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0.63,
          'conductivity': '2087'
        },
        'molal_dict': {
          'H+': 2.143177149404066e-8,
          'Ca++': 0.00630759011918941,
          'Mg++': 0.0010864896657093838,
          'Na+': 0.004291496382617275,
          'K+': 0.0000172838005496678,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 4.5309882950922857e-7,
          'Fe++': 0.000003554074250339771,
          'Mn++': 0,
          'OH-': 6.337416771220939e-7,
          'SO4--': 0.002265821378209707,
          'HSO4-': 2.503412769788423e-9,
          'Cl-': 0.014404779287374013,
          'F-': 0.0000020851929032731285,
          'HF': 4.839764818392087e-11,
          'NO3-': 0.000003059079612894058,
          'Br-': 0,
          'PO4---': 4.719237652925026e-10,
          'HPO4--': 0.000009443852553887841,
          'H2PO4-': 0.000001866015265729586,
          'H3PO4': 3.9420913094164595e-12,
          'B(OH)3': 0.000012430228537088506,
          'B(OH)4-': 4.660257963224081e-7,
          'H2SiO4--': 2.2388872194501003e-10,
          'H3SiO4-': 0.000001314959117674034,
          'H4SiO4': 0.0001734730011586378,
          'S--': 0,
          'HS-': 0.000012865331985025748,
          'H2S': 0.0000018502842035690487,
          'HCO3-': 0.00012635176476880533,
          'CO2': 0.0000043340461517428984,
          'CO3--': 5.096519527543556e-7
        },
        'ionic_strength': 0.028778839011250407,
        'hardness': 737.5910267640726,
        'label': '[ Waste_1 ]'
      },
      '8': {
        'flow': 37.47990294643638,
        'temp': 25,
        'press': 0,
        'prop_dict': {
          'flow': 37.47990294643638,
          'temp': 25,
          'press': 0,
          'tds': 4.480437052239887,
          'ph': 7.225313721818235,
          'toc': 0.000003415604661159706,
          'malk': 0.6365487148265562,
          'hardness': 2.0169542075222844,
          'density': 997.003282973112,
          'ionic_str': 0.00009373362353661434
        },
        'ppm_dict': {
          'Ca++': 0.7205313089598084,
          'Mg++': 0.05283383571868044,
          'Na+': 0.3725429901967954,
          'K+': 0.4764610012185869,
          'NH4+': 0,
          'Ba++': 0,
          'Sr++': 0.0001227183499372354,
          'Fe++': 0.0006220219702181449,
          'Mn++': 0,
          'SO4--': 0.431460024336707,
          'Cl-': 1.6636334864775697,
          'F-': 0.00015105310071785455,
          'NO3-': 0.0035525762608312693,
          'Br-': 0,
          'PO4---': 0.002567406337301418,
          'B-': 0.033624487838617725,
          'SiO2': 0.038734447528675886,
          'H2S': 0.5000429841416304,
          'HCO3-': 0.18340999763007718,
          'CO2': 0.01747311203756635,
          'CO3--': 0.00014671217373236109
        },
        'sat_indices': {
          'density': '997.0',
          'baso4': '0.00%',
          'caf2': '0.00%',
          'srso4': '0.00%',
          'lsi': '-4.91',
          'sdi': '-5.42',
          'caso4': '0.01%',
          'struvite': '0.000%',
          'sio2': '0.03%',
          'mgoh2': '0.00%',
          'osmotic_pressure': 0,
          'conductivity': '8.8'
        },
        'molal_dict': {
          'H+': 6.01918776310348e-8,
          'Ca++': 0.000018032340653788987,
          'Mg++': 0.000002180327855814675,
          'Na+': 0.000016253343434065053,
          'K+': 0.000012223008226213249,
          'NH4+': 0,
          'NH3': 0,
          'Ba++': 0,
          'Sr++': 1.4047904482109442e-9,
          'Fe++': 1.1171891688263957e-8,
          'Mn++': 0,
          'OH-': 1.7120599899510582e-7,
          'SO4--': 0.000004504875376874813,
          'HSO4-': 2.493203726808346e-11,
          'Cl-': 0.00004706628823611084,
          'F-': 7.97423317421285e-9,
          'HF': 6.999264431111323e-13,
          'NO3-': 5.7468384542509156e-8,
          'Br-': 0,
          'PO4---': 1.1207014796468739e-13,
          'HPO4--': 1.4170744084354103e-8,
          'H2PO4-': 1.2943991510295337e-8,
          'H3PO4': 1.0716107546557054e-13,
          'B(OH)3': 0.0000030890027719050437,
          'B(OH)4-': 3.0569833594695815e-8,
          'H2SiO4--': 4.59736593718531e-14,
          'H3SiO4-': 1.2912191759144936e-9,
          'H4SiO4': 6.453208178370402e-7,
          'S--': 0,
          'HS-': 0.000009581338583376278,
          'H2S': 0.000005134585999875329,
          'HCO3-': 0.0000030149314459568086,
          'CO2': 3.982210199384138e-7,
          'CO3--': 2.452195264483792e-9
        },
        'ionic_strength': 0.00009373362353661434,
        'hardness': 2.0169542075222844,
        'label': '[ Product_1 ]'
      }
    },
    'errors': [],
    'stream_input_dict': {
      '1': {
        'source': 'Feed_1',
        'destination': 'Chem_Dose_1'
      },
      '2': {
        'source': 'Chem_Dose_1',
        'destination': 'Stripper_1'
      },
      '3': {
        'source': 'Stripper_1',
        'destination': 'Chem_Dose_2'
      },
      '4': {
        'source': 'Chem_Dose_2',
        'destination': 'CF_1'
      },
      '5': {
        'source': 'CF_1',
        'destination': 'HP_Pump_1'
      },
      '6': {
        'source': 'HP_Pump_1',
        'destination': 'RO-HP_1'
      },
      '7': {
        'source': 'RO-HP_1',
        'destination': 'Waste_1'
      },
      '8': {
        'source': 'RO-HP_1',
        'destination': 'Product_1'
      }
    },
    'edi_output_dict': {},
    'project_details': {
      'db_version': 4.08,
      'DateOfChange': '2023-01-20 18:30:00+00:00',
      'project_name': 'Acid_H2SStripper_Caustic_1pRO',
      'file_name': 'Acid_H2SStripper_Caustic_1pRO',
      'last_update': '2023-10-13',
      'cloud_version': '5.0'
    },
    'ro_hp': {
      'ro_dict': {
        'RO-HP_1': {
          'grid-data': [
            {
              'stage': 1,
              'pressureVessels': 6,
              'elementsperVessel': 6,
              'application': 'BW RO PA',
              'elementGroup': 'Standard',
              'elementModel': 'AG8040F 400',
              'elementAge': '0.00',
              'fluxAnnual': '1.00',
              'saltPassageAnnual': '1.00',
              'permeatePressure': '0.00',
              'interStageBoostPressure': '0.00',
              'boostEnergyEfficiency': '0.00',
              'interStagePressureLoss': '0.00'
            },
            {
              'stage': 2,
              'pressureVessels': 3,
              'elementsperVessel': 6,
              'application': 'BW RO PA',
              'elementGroup': 'Standard',
              'elementModel': 'AG8040F 400',
              'elementAge': '0.00',
              'fluxAnnual': '1.00',
              'saltPassageAnnual': '1.00',
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
          'recovery': 75,
          'unit_type': 'RO_HP'
        }
      },
      'abFactor': 1
    }
  }
};
export const invoiceData1 = {
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
        'project name': '废水零排  3pass_RO_EDI',
        'engineer': '',
        'location': 'standard flowsheet',
        'phone': '',
        'notes': '上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开上面的 链接 我打不开'
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
      'MixSplit_3': {
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
      'MixSplit_4': {
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
      'MixSplit_5': {
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
      'MixSplit_6': {
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
      'MixSplit_7': {
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
      'MixSplit_8': {
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
      'mixer_nos': 8,
      'Mixer-Splitter Unit ID': [
        'MixSplit_1',
        'MixSplit_2',
        'MixSplit_3',
        'MixSplit_4',
        'MixSplit_5',
        'MixSplit_6',
        'MixSplit_7',
        'MixSplit_8',
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
      'project_name': '废水零排  3pass_RO_EDI',
      'file_name': '废水零排  3pRO_ConcRecycleToP2_EDI(SWfeed)',
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

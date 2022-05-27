<!-- THIS IS A GENERATED FILE. DO NOT EDIT MANUALLY! -->
# Environmental Documentation

## ENV__ATMO__T

Property | Value
---------|-------
Name | Temperature
Description | Atmospheric temperature
Unit | °C
StoreInTimestream | true
Format | .2f

## ENV__ATMO__P

Property | Value
---------|-------
Name | Pressure
Description | Atmospheric pressure
Unit | hPa
StoreInTimestream | true
Format | .2f

## ENV__ATMO__RH

Property | Value
---------|-------
Name | Rel. Humidity
Description | Relative humidity
Unit | %
StoreInTimestream | true
Format | d

## ENV__ATMO__IRRADIATION

Property | Value
---------|-------
Name | irradiation
Description | Irradiance or irradiation (deutsch: Bestrahlungsstärke) is a radiation power per area (unit: W/m2). Such a measurement is specifically bound to the time of the measurement.
Unit | W/m²
StoreInTimestream | true
Format | d

## ENV__ATMO__RADIANT_EXPOSURE

Property | Value
---------|-------
Name | Global Radiation
Description | Radiant exposure (deutsch: Bestrahlung) is the radiation energy (power integrated over time) received by an area (unit: J/m2). This measurement is bound to the integration time, mostly a packet cycle.
Unit | J/m²
StoreInTimestream | true
Format | .0e

## ENV__ATMO__RAIN

Property | Value
---------|-------
Name | Precipitation
Description | undefined
Unit | mm/m²
StoreInTimestream | true
Format | .1f

## ENV__ATMO__ETO

Property | Value
---------|-------
Name | ENV__ATMO__ETO
Description | undefined
Unit | undefined
StoreInTimestream | true
Models | MODEL__NUM

## ENV__ATMO__ETC

Property | Value
---------|-------
Name | ENV__ATMO__ETC
Description | undefined
Unit | undefined
Models | MODEL__IMG
StoreInTimestream | false

## ENV__ATMO__WIND__SPEED

Property | Value
---------|-------
Name | Wind Speed
Description | undefined
Unit | km/h
StoreInTimestream | true
Format | .1f

## ENV__ATMO__WIND__GUSTINESS

Property | Value
---------|-------
Name | Gustiness
Description | undefined
Unit | km/h
StoreInTimestream | true
Format | .1f

## ENV__ATMO__WIND__DIRECTION

Property | Value
---------|-------
Name | Wind Direction
Description | undefined
Unit | °
StoreInTimestream | true
Format | d

## ENV__ATMO__SNOW__HEIGHT

Property | Value
---------|-------
Name | snow height
Description | undefined
Unit | undefined
StoreInTimestream | true
Models | MODEL__NUM

## ENV__ATMO__SNOW__INSULATION

Property | Value
---------|-------
Name | snow insulation
Description | undefined
Unit | undefined
StoreInTimestream | true
Models | MODEL__NUM

## ENV__ATMO__SNOW__MELT

Property | Value
---------|-------
Name | snow melt
Description | undefined
Unit | undefined
StoreInTimestream | true
Models | MODEL__NUM

## ENV__SOIL__T

Property | Value
---------|-------
Name | Soil Temperature
Description | undefined
Unit | °C
StoreInTimestream | true
Format | .2f

## ENV__SOIL__EC

Property | Value
---------|-------
Name | Electrical Coductivity
Description | undefined
Unit | µS/cm
StoreInTimestream | true
Format | .1f

## ENV__SOIL__NORM_ER

Property | Value
---------|-------
Name | Norm. Permittivity
Description | undefined
Unit | undefined
StoreInTimestream | true
Format | .2f

## ENV__SOIL__VWC

Property | Value
---------|-------
Name | Volumetric Water Content
Description | undefined
Unit | %
StoreInTimestream | true
Format | d

## ENV__SOIL__MATRIX_POTENTIAL

Property | Value
---------|-------
Name | Matrix Potential
Description | undefined
Unit | cbar
StoreInTimestream | true
Format | d

## ENV__SOIL__CAPACITANCE__ABSOLUTE

Property | Value
---------|-------
Name | Capacitance abs.
Description | undefined
Unit | pF
StoreInTimestream | true
Format | .2f

## ENV__SOIL__CAPACITANCE__DIFFERENTIAL

Property | Value
---------|-------
Name | Capacitance diff.
Description | undefined
Unit | pF
StoreInTimestream | true
Format | .2f

## ENV__SOIL__CAPACITANCE__A

Property | Value
---------|-------
Name | Capacitance A
Description | Leg A of the soil sensor
Unit | pF
StoreInTimestream | true
Format | .2f

## ENV__SOIL__CAPACITANCE__B

Property | Value
---------|-------
Name | Capacitance B
Description | Leg B of the soil sensor
Unit | pF
StoreInTimestream | true
Format | .2f

## ENV__SOIL__CAPACITANCE__OFFSET

Property | Value
---------|-------
Name | Capacitance Offset
Description | undefined
Unit | pF
StoreInTimestream | true
Format | .2f

## DEV__ENERGY__VCAP

Property | Value
---------|-------
Name | Battery
Description | undefined
Unit | %
StoreInTimestream | true
Format | d

## DEV__ENERGY__LOWLIGHT

Property | Value
---------|-------
Name | Low Light
Description | undefined
Unit | undefined
StoreInTimestream | true
Format | d

## DEV__ALERT__TRIGGERED

Property | Value
---------|-------
Name | Alarm triggered
Description | A device alert (motion, theft detection) was triggered
Unit | undefined
StoreInTimestream | true
Format | d

## DEV__ALERT__ARMED

Property | Value
---------|-------
Name | Alarm active
Description | The internal alert (motion, theft detection) is active and listening for trigger events
Unit | undefined
StoreInTimestream | true
Format | d

## DEV__POSITION__LATITUDE

Property | Value
---------|-------
Name | latitude
Description | undefined
Unit | °
StoreInTimestream | false
Format | .6f

## DEV__POSITION__LONGITUDE

Property | Value
---------|-------
Name | longitude
Description | undefined
Unit | °
StoreInTimestream | false
Format | .6f

## DEV__RF__RSSI

Property | Value
---------|-------
Name | DEV__RF__RSSI
Description | undefined
Unit | dBm
StoreInTimestream | true
Format | d

## DEV__RF__RSRP

Property | Value
---------|-------
Name | DEV__RF__RSRP
Description | undefined
Unit | dBm
StoreInTimestream | true
Format | d

## DEV__RF__RSRQ

Property | Value
---------|-------
Name | DEV__RF__RSRQ
Description | undefined
Unit | dB
StoreInTimestream | true
Format | .2f

## DEV__RF__SINR

Property | Value
---------|-------
Name | DEV__RF__SINR
Description | undefined
Unit | dB
StoreInTimestream | true
Format | .2f

## DEV__SOILSENSOR__ID

Property | Value
---------|-------
Name | Soil Moisture Sensor ID
Description | The ID (=serial number or EUI) of the Agvolution Soil Moisture sensor.
Unit | undefined
StoreInTimestream | false

## OBJ__LIQUIDLEVEL

Property | Value
---------|-------
Name | Level
Description | undefined
Unit | mm
StoreInTimestream | true
Format | d

## OBJ__WEIGHT

Property | Value
---------|-------
Name | Weight
Description | undefined
Unit | kg
StoreInTimestream | true
Format | .3f

## SAT__SEN1__ASC

Property | Value
---------|-------
Name | Ascending
Description | Ascending imagery from Sentinel 1
Unit | undefined
StoreInTimestream | false

## SAT__SEN1__DESC

Property | Value
---------|-------
Name | Descending
Description | Descending imagery from Sentinel 1
Unit | undefined
StoreInTimestream | false

## SAT__SEN2__NDVI

Property | Value
---------|-------
Name | NDVI
Description | Normalized Difference Vegetation Index (NDVI) from Sentinel 2 imagery
Unit | undefined
StoreInTimestream | false
DerivedFrom | CL
Expression | (b8 - b4) / (b8 + b4)

## SAT__SEN2__RGB

Property | Value
---------|-------
Name | RGB
Description | A true color image from Sentinel 2 imagery
Unit | undefined
StoreInTimestream | false
DerivedFrom | CL
Expression | 255 * (1.055 * (b4**(1/2.4))) - 0.055, 255 * (1.055 * (b3**(1/2.4))) - 0.055, 255 * (1.055 * (b2**(1/2.4))) - 0.055

## SAT__SEN2__KC

Property | Value
---------|-------
Name | KC
Description | KC index from Sentinel 2 imagery
Unit | undefined
StoreInTimestream | false
DerivedFrom | CL
Expression | 1.4571 * ((b8 - b4) / (b8 + b4)) - 0.1725

## SAT__SEN2__CIGREEN

Property | Value
---------|-------
Name | CIGREEN
Description | CIGREEN index from Sentinel 2 imagery
Unit | undefined
StoreInTimestream | false
DerivedFrom | CL
Expression | (b8 / b3) - 1

## SAT__SEN2__SAVI

Property | Value
---------|-------
Name | SAVI
Description | SAVI index from Sentinel 2 imagery
Unit | undefined
StoreInTimestream | false
DerivedFrom | CL
Expression | ((1.0 + 0.428) * (b8 - b4)) / (b8 + b4 + 0.428)

## SAT__SEN2__WDVI

Property | Value
---------|-------
Name | WDVI
Description | WDVI index from Sentinel 2 imagery
Unit | undefined
StoreInTimestream | false
DerivedFrom | CL
Expression | b8 - (1.007 * b4)

    
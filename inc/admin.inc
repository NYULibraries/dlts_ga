<?php

function dlts_ga_config($form, &$form_state) {  
  $form['dlts_ga'] = array(
    '#type' => 'fieldset',
    '#title' => t('DLTS - Google Analytics'),
    '#collapsed' => FALSE,
    '#collapsible' => FALSE,
  );  
  $form['dlts_ga']['dlts_ga_code'] = array(
    '#type' => 'textfield',
    '#title' => t('Google Analytics Universal Analytics code (UA)'),
    '#default_value' => variable_get('dlts_ga_code', false),
    '#size' => 20,
    '#maxlength' => 100,
    '#description' => t('Universal Analytics introduces a set of features that change the way data is collected and organized in your Analytics account, so you can get a better understanding of how users interact with your online content.'),
  );  
  $form['dlts_ga']['dlts_ga_debug'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Google Analytics debug mode for this website'),
    '#default_value' => variable_get('dlts_ga_debug', false),
  );  
  $form['dlts_ga']['dlts_ga_enable'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Google Analytics for this website'),
    '#default_value' => variable_get('dlts_ga_enable', false),
    '#description' => t('Enable Google Analytics. Set up and customize tracking for websites, web and mobile apps, and internet connected devices.'),    
  ); 
  $form['dlts_ga']['dlts_ga_cookiedomain'] = array(
    '#type' => 'textfield',
    '#title' => t('Cookie domain'),
    '#default_value' => variable_get('dlts_ga_cookiedomain', 'auto'),
    '#size' => 20,
    '#maxlength' => 100,
  );  
  $form['dlts_ga']['dlts_ga_anonymizeip'] = array(
    '#type' => 'textfield',
    '#title' => t('Anonymize IP'),
    '#default_value' => variable_get('dlts_ga_anonymizeip', 'true'),
    '#size' => 20,
    '#maxlength' => 100,
  );   
  return system_settings_form($form);
}

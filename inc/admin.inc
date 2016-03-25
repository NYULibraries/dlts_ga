<?php

function dlts_google_analytics_config($form, &$form_state) {
  $form['localhost'] = array(
    '#type' => 'fieldset',
    '#title' => t('DLTS - Google Analytics'),
    '#collapsed' => FALSE,
    '#collapsible' => FALSE,
  );  
  $form['localhost']['dlts_google_analytics_code'] = array(
    '#type' => 'textfield',
    '#title' => t('Google Analytics Universal Analytics code (UA)'),
    '#default_value' => variable_get('dlts_google_analytics_code', false),
    '#size' => 20,
    '#maxlength' => 100,
    '#description' => t('Universal Analytics introduces a set of features that change the way data is collected and organized in your Analytics account, so you can get a better understanding of how users interact with your online content.'),
  );  
  $form['localhost']['dlts_google_analytics_debug'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Google Analytics debug mode for this website'),
    '#default_value' => variable_get('dlts_google_analytics_debug', false),
  );  
  $form['localhost']['dlts_google_analytics_enable'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable Google Analytics for this website'),
    '#default_value' => variable_get('dlts_google_analytics_enable', false),
    '#description' => t('Enable Google Analytics. Set up and customize tracking for websites, web and mobile apps, and internet connected devices.'),    
  ); 
  $form['localhost']['dlts_google_analytics_cookiedomain'] = array(
    '#type' => 'textfield',
    '#title' => t('Cookie domain'),
    '#default_value' => variable_get('dlts_google_analytics_cookiedomain', 'auto'),
    '#size' => 20,
    '#maxlength' => 100,
  );  
  $form['localhost']['dlts_google_analytics_anonymizeip'] = array(
    '#type' => 'textfield',
    '#title' => t('Anonymize IP'),
    '#default_value' => variable_get('dlts_google_analytics_anonymizeip', 'true'),
    '#size' => 20,
    '#maxlength' => 100,
  );   
  return system_settings_form($form);
}

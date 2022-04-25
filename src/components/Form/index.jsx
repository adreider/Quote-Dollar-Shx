import React from "react";
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { SmallInput } from '../SmallInput';
import { Button } from '../Button';
import { styles } from './styles';
import { Formik } from "formik";

export function Form() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Formik >
      <View style={styles.form}>
        <View style={styles.field}>
          <View>
            <Text style={[styles.label, { textAlign: 'center' }]}>
              Data Inicial
            </Text>

            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                /
              </Text>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                /
              </Text>
              <SmallInput maxLength={4} />
            </View>
          </View>

          <View>
            <Text style={[styles.label, { textAlign: 'center' }]}>
              Data final
            </Text>

            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                /
              </Text>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                /
              </Text>
              <SmallInput maxLength={4} />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Button title="Agendar" />
        </View>
      </View>

      </Formik>

    </KeyboardAvoidingView>
  )
}
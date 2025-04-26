package com.Spring.Boot.HMS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Spring.Boot.HMS.entity.Patient;
import com.Spring.Boot.HMS.repository.Patientrepo;

@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class PatientController {

    @Autowired
    Patientrepo patientrepo;

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return patientrepo.findAll();
    }

    @PostMapping("/patients")
    public Patient createPatient(@RequestBody Patient patient) {
        return patientrepo.save(patient);
    }

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable int id) throws AttributeNotFoundException {
        Patient patient = patientrepo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Patient not found with ID: " + id));
        return ResponseEntity.ok(patient);
    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable int id, @RequestBody Patient patientDetails)
            throws AttributeNotFoundException {
        Patient patient = patientrepo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Patient not found with ID: " + id));

        // Only update the fields, not the ID
        patient.setAge(patientDetails.getAge());
        patient.setName(patientDetails.getName());
        patient.setBlood(patientDetails.getBlood());
        patient.setDose(patientDetails.getDose());
        patient.setFees(patientDetails.getFees());
        patient.setPrescription(patientDetails.getPrescription());
        patient.setUrgency(patientDetails.getUrgency());

        Patient updatedPatient = patientrepo.save(patient);
        return ResponseEntity.ok(updatedPatient);
    }

    @DeleteMapping("/patients/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable int id)
            throws AttributeNotFoundException {
        Patient patient = patientrepo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Patient not found with ID: " + id));

        patientrepo.delete(patient);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

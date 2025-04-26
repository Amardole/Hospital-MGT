package com.Spring.Boot.HMS.docLogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Spring.Boot.HMS.docLogin.entity.Medicine;
import com.Spring.Boot.HMS.docLogin.repository.MedicineRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class MedicineController {

    @Autowired
    MedicineRepo medicineRepo;

    @PostMapping("/medicines")
    public Medicine createMedicine(@RequestBody Medicine medicine) {
        return medicineRepo.save(medicine);
    }

    @GetMapping("/medicines/{id}")
    public ResponseEntity<Medicine> getMedicineById(@PathVariable Long id) throws AttributeNotFoundException {
        Medicine medicine = medicineRepo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Medicine not found with ID: " + id));
        return ResponseEntity.ok(medicine);
    }

    @GetMapping("/medicines")
    public List<Medicine> listAllMedicines() {
        return medicineRepo.findAll();
    }

    @PutMapping("/medicines/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id, @RequestBody Medicine medicineDetails)
            throws AttributeNotFoundException {

        Medicine medicine = medicineRepo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Medicine not found with ID: " + id));

        // Do NOT change the ID
        medicine.setDrugName(medicineDetails.getDrugName());
        medicine.setStock(medicineDetails.getStock());

        Medicine updatedMedicine = medicineRepo.save(medicine);
        return ResponseEntity.ok(updatedMedicine);
    }

    @DeleteMapping("/medicines/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMedicine(@PathVariable Long id)
            throws AttributeNotFoundException {
        Medicine medicine = medicineRepo.findById(id)
                .orElseThrow(() -> new AttributeNotFoundException("Medicine not found with ID: " + id));

        medicineRepo.delete(medicine);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

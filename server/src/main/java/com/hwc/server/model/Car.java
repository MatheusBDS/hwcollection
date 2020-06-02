package com.hwc.server.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.*;

@Document
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Car {

    @Id
    private String id;
    @TextIndexed(weight = 10f)
    private String name;
    private String number;
    private String numberTotal;
    @TextIndexed(weight = 9f)
    private String year;
    @TextIndexed(weight = 8f)
    private String series;
    private String seriesNumber;
    private String seriesTotalNumber;
    private List<String> color;
    private List<String> baseColorType;
    @TextIndexed(weight = 15f)
    private String key;
    private String country;
    private String wheelType;
    private String tampo;
    private String photo;

    private Set<String> favoriteds = new HashSet<>();
    private Set<String> collections = new HashSet<>();

    private Map<String, Object> extraFields = new HashMap<>();

    @JsonAnyGetter
    public Map<String, Object> getExtraFields() {
        return extraFields;
    }

    @JsonAnySetter
    public void setExtraFields(String key, Object value) {
        this.extraFields.put(key, value);
    }
}
package com.example.bookshop.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetListBookByGenreRequest {
    @NotNull
    private Long genreId;

    @NotNull
    private Long page;

    @NotNull
    private Long size;
}